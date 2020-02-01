import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Desktop view
import App from 'App';
import {
  AboutPage,
  HomePage,
  MusersPage,
  FraserHealthPage,
  FlexridePage
} from 'pages';

const routes = (
  <Route
    render={() => {
      return (
        <App>
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route
              path="/musers"
              render={() => {
                return <MusersPage />;
              }}
            />
            <Route
              path="/flexride"
              render={() => {
                return <FlexridePage />;
              }}
            />
            <Route
              path="/fraserhealth"
              render={() => {
                return <FraserHealthPage />;
              }}
            />
            <Route path="/" component={HomePage} />
          </Switch>
        </App>
      );
    }}
  />
);

export default routes;
