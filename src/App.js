import React from "react";
import { green } from "@material-ui/core/colors";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from "./Routes";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
