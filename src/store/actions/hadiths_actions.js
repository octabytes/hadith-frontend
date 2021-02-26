import store from "../store";
import { LOAD_BOOK_HADITHS } from "../reducers/hadiths_reducer";

const loadBookHadiths = (collection, book, hadiths, offset = 0) => {
  store.dispatch({
    type: LOAD_BOOK_HADITHS,
    collection,
    book,
    hadiths,
    offset,
  });
};

const HadithsActions = { loadBookHadiths };

export default HadithsActions;
