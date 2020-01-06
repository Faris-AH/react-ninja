import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NinjaList } from "../pages/ninja";

export default function NinjaRouting() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={props => <NinjaList {...props}></NinjaList>}></Route>
      </Switch>
    </Router>
  );
}
