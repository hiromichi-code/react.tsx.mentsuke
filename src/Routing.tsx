import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import App from "./App";
import Sixteen from './Sixteen';
import Eight from './Eight';
import Four from './Four';
import Two from './Two';

class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={App} />
          <Route exact path="/sixteen" component={Sixteen} />
          <Route exact path="/eight" component={Eight} />
          <Route exact path="/four" component={Four} />
          <Route exact path="/two" component={Two} />
        </switch>
      </BrowserRouter>
    );
  }
}

export default Routing;
