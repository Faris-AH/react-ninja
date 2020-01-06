import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NinjaRouting from "./NinjaRouting";

export default function AppRouting(props) {
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          render={props => <NinjaRouting {...props}></NinjaRouting>}></Route>
      </Switch>
    </Router>
  );
}
