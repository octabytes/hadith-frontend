export const APP_SELECT_LANGUAGE = "APP_SELECT_LANGUAGE";

const initialState = {
  language: "english",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_SELECT_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return { ...state };
  }
};

export default AppReducer;
