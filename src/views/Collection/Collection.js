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
    const response = await getCollectionBooksAPI(collectionName);
    if (!response.error) {
      BooksActions.loadCollectionBooks(collectionName, response);
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
      <Grid container spacing={2}>
        {books.map((book) => (
          <Paper
            onClick={() => getBookHadiths(book.number)}
            item
            key={book.number}
          >
            <Grid item xs={6}>
              {book.english}
            </Grid>
            <Grid item xs={6} style={{ direction: "rtl" }}>
              {book.urdu}
            </Grid>
          </Paper>
        ))}
      </Grid>
    </div>
  );
};

export default Collection;
