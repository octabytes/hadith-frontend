import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import HadithsActions from "store/actions/hadiths_actions";
import { getBookHadithsAPI } from "api/hadiths";
import Pagination from "./Components/Pagination";

const Hadiths = (props) => {
  const search = props.location.search;
  let offset = 0;
  if (search.length) {
    offset = parseInt(search.replace("?offset=", ""));
  }

  const collectionName = props.match.params.collection;
  const bookNumber = props.match.params.number;
  const hadithPath = collectionName + "_" + bookNumber;

  const language = useSelector((state) => state.app.language);
  const hadiths = useSelector((state) => {
    if (state.hadiths[hadithPath]) {
      return state.hadiths[hadithPath][offset];
    }

    return undefined;
  });

  const textDirection = language === "english" ? "ltr" : "rtl";

  const loadBookHadiths = async () => {
    const response = await getBookHadithsAPI(collectionName, bookNumber);
    if (!response.error) {
      HadithsActions.loadBookHadiths(collectionName, bookNumber, response);
    }
  };

  useEffect(() => {
    loadBookHadiths();
  }, []);

  const renderHadithStatus = (hadith) => {
    let status = "";
    if (hadith.is_sahih) {
      if (language === "urdu") {
        status = "صحیح";
      } else {
        status = "Sahih";
      }
    } else {
      if (language === "urdu") {
        status = "ضعيف";
      } else {
        status = "Da'if";
      }
    }

    if (hadith.is_muttafaqun_alayh) {
      if (language === "urdu") {
        status += " (متفق عليه)";
      } else {
        status += " (Muttafaqun Alayh)";
      }
    }

    return status;
  };

  if (!hadiths) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {hadiths.map((hadith) => (
        <Grid key={hadith.id} container spacing={2}>
          <Grid item xs={6}>
            <Typography style={{ direction: textDirection }}>
              {hadith.text[language]}
            </Typography>
            <Typography>Status: {renderHadithStatus(hadith)}</Typography>
            <Typography>Hadith Number: {hadith.number}</Typography>
            {hadith.internationalNumber && (
              <Typography>
                International Number: {hadith.internationalNumber}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6} style={{ direction: "rtl" }}>
            <Typography>{hadith.text.arabic}</Typography>
          </Grid>
        </Grid>
      ))}

      <Pagination />
    </div>
  );
};

export default Hadiths;
