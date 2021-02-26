import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "Layout/Main";
import Home from "views/Home";
import Collection from "views/Collection";
import Hadiths from "views/Hadiths";

const RouteWithLayout = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
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
        <RouteWithLayout exact path="/" component={Home} />
        <RouteWithLayout
          exact
          path="/collection/:name"
          component={Collection}
        />
        <RouteWithLayout
          exact
          path="/collection/:name/book/:number"
          component={Hadiths}
        />
        <RouteWithLayout exact path="/not-found" component={PageNotFound} />

        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

const PageNotFound = () => {
  return <h1>Page Not Found</h1>;
};

export default Routes;
