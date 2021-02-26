export const LOAD_BOOK_HADITHS = "LOAD_BOOK_HADITHS";

const initialState = {};

const loadBookHadiths = (state, action) => {
  const hadithPath = action.collection + "_" + action.book;
  const newState = Object.assign({}, state);
  if (newState[hadithPath]) {
    if (!newState[hadithPath][action.offset]) {
      newState[hadithPath][action.offset] = action.hadiths;
    }
  } else {
    newState[hadithPath] = {};
    newState[hadithPath][action.offset] = action.hadiths;
  }

  return newState;
};

const HadithsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOK_HADITHS:
      return loadBookHadiths(state, action);
    default:
      return { ...state };
  }
};

export default HadithsReducer;
