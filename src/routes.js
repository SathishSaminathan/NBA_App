import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/home";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default Routes;
