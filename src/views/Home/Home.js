import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Home = (props) => {
  const collections = [
    {
      collection: "bukhari",
      urdu: "صحيح البخاري",
      english: "Sahih al-Bukhari",
    },
    {
      collection: "muslim",
      urdu: "صحيح مسلم",
      english: "Sahih Muslim",
    },
    {
      collection: "tirmidhi",
      urdu: "جامع الترمذي ",
      english: "Jami at-Tirmidhi",
    },
    {
      collection: "abu_dawud",
      urdu: "سنن أبي داود",
      english: "Sunan Abi Dawud",
    },
    {
      collection: "nasai",
      urdu: "سنن النسائي",
      english: "Sunan an-Nasa'i",
    },
    {
      collection: "ibne_maja",
      urdu: "سنن ابن ماجه",
      english: "Sunan Ibn Majah",
    },
  ];

  const getCollectionBooks = (collection) => {
    props.history.push(`/collection/${collection}`);
  };

  return (
    <div>
      <Grid container direction="row" justify="center">
        {collections.map((item) => (
          <Grid key={item.collection} item xs={6}>
            <Paper
              elevation={3}
              onClick={() => getCollectionBooks(item.collection)}
            >
              <Typography variant="h5">{item.english}</Typography>
              <Typography style={{ direction: "rtl" }} variant="h5">
                {item.urdu}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
