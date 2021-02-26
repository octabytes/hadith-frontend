import store from "../store";
import { APP_SELECT_LANGUAGE } from "../reducers/app_reducer";

const selectLanguage = (language) => {
  store.dispatch({
    type: APP_SELECT_LANGUAGE,
    language: language,
  });
};

const AppActions = { selectLanguage };

export default AppActions;
