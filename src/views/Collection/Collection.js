import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { getCollectionBooksAPI } from "api/hadiths";
import BooksActions from "store/actions/books_actions";

const Collection = (props) => {
  const collectionName = props.match.params.name;
  const books = useSelector((state) => state.books[collectionName]);

  const loadCollectionBooks = async () => {
    if (!books) {
      const response = await getCollectionBooksAPI(collectionName);
      if (!response.error) {
        BooksActions.loadCollectionBooks(collectionName, response);
      }
    }
  };

  useEffect(() => {
    loadCollectionBooks();
  }, []);

  const getBookHadiths = (bookNumber) => {
    props.history.push(`/collection/${collectionName}/book/${bookNumber}`);
  };

  if (!books) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {books.map((book) => (
        <Paper
          style={{ padding: 16, marginBottom: 8, cursor: "pointer" }}
          onClick={() => getBookHadiths(book.number)}
          key={book.number}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>{book.english}</Typography>
            </Grid>
            <Grid item xs={6} style={{ direction: "rtl" }}>
              <Typography
                style={{ fontFamily: "'Lateef', cursive", fontSize: 27 }}
              >
                {book.urdu}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default Collection;
