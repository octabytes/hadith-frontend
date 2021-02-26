import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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

  const collectionName = props.match.params.name;
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
    if (!hadiths) {
      const response = await getBookHadithsAPI(
        collectionName,
        bookNumber,
        offset
      );
      if (!response.error) {
        HadithsActions.loadBookHadiths(
          collectionName,
          bookNumber,
          response,
          offset
        );
      }
    }
  };

  useEffect(() => {
    loadBookHadiths();
  }, [search]);

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

  if (!hadiths.length) {
    return <h1>No more hadiths</h1>;
  }

  return (
    <div>
      {hadiths.map((hadith) => (
        <div key={hadith.id}>
          <Paper
            style={{
              padding: 16,
              marginBottom: 8,
              marginTop: 16,
              backgroundColor: "aliceblue",
            }}
            elevation={5}
          >
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography style={{ fontSize: 20 }}>
                  {hadith.chapter.english}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  style={{
                    direction: "rtl",
                    fontFamily: "'Lateef', cursive",
                    fontSize: 27,
                  }}
                >
                  {hadith.chapter.urdu}
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper style={{ padding: 16, marginBottom: 8 }} elevation={3}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography style={{ direction: textDirection, fontSize: 20 }}>
                  {hadith.text[language]}
                </Typography>
                <br />
                <Typography variant="body2">
                  Status: {renderHadithStatus(hadith)}
                </Typography>
                <Typography variant="body2">
                  Hadith Number: {hadith.hadith_number}
                </Typography>
                {hadith.international_number && (
                  <Typography variant="body2">
                    International Number: {hadith.international_number}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6} style={{ direction: "rtl" }}>
                <Typography
                  style={{ fontFamily: "'Lateef', cursive", fontSize: 27 }}
                >
                  {hadith.text.arabic}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}

      <Pagination />
    </div>
  );
};

export default Hadiths;
