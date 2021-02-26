import store from "../store";
import { LOAD_COLLECTION_BOOKS } from "../reducers/books_reducer";

const loadCollectionBooks = (collection, books) => {
  store.dispatch({
    type: LOAD_COLLECTION_BOOKS,
    collection: collection,
    books: books,
  });
};

const BooksActions = { loadCollectionBooks };

export default BooksActions;
