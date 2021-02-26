import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "Layout/Main";
import Home from "views/Home";
import Collection from "views/Collection";
import Hadiths from "views/Hadiths";

const RouteWithLayout = (props) => {
  const { component: Component, path } = props;
  return (
    <Route
      exact
      path={path}
      render={(matchProps) => (
        <Main>
          <Component {...matchProps} />
        </Main>
      )}
    />
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout path="/" component={Home} />
        <RouteWithLayout path="/collection/:name" component={Collection} />
        <RouteWithLayout
          path="/collection/:name/book/:number"
          component={Hadiths}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
