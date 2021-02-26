export const LOAD_COLLECTION_BOOKS = "LOAD_COLLECTION_BOOKS";

const initialState = {};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COLLECTION_BOOKS:
      return { ...state, [action.collection]: action.books };
    default:
      return { ...state };
  }
};

export default BooksReducer;
