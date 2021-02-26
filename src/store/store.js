import { createStore, combineReducers } from "redux";
import AppReducer from "./reducers/app_reducer";
import BooksReducer from "./reducers/books_reducer";
import HadithsReducer from "./reducers/hadiths_reducer";

const reducers = combineReducers({
  app: AppReducer,
  books: BooksReducer,
  hadiths: HadithsReducer,
});

const store = createStore(reducers);

export default store;
