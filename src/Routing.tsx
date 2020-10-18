import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Sixteen from "./Sixteen";
import Eight from "./Eight";
import Four from "./Four";
import Two from "./Two";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="./App" component={App} />
          <Route exact path="./Sixteen" component={Sixteen} />
          <Route exact path="./Eight" component={Eight} />
          <Route exact path="./Four" component={Four} />
          <Route exact path="./Two" component={Two} />
        </Switch>
      </BrowserRouter>
    );
  }
}
