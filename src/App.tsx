import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import A4 from "./main/A4";
import A5 from "./main/A5";
import A6 from "./main/A6";
import B5 from "./main/B5";
import B6 from "./main/B6";
import 四六 from "./main/46";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter basename="/react.tsx.mentsuke">
      <Route exact path="/" component={Home} />
      <Route exact path="/A4" component={A4} />
      <Route exact path="/A5" component={A5} />
      <Route exact path="/A6" component={A6} />
      <Route exact path="/B5" component={B5} />
      <Route exact path="/B6" component={B6} />
      <Route exact path="/46" component={四六} />
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div className="main">
      <div className="header">
        <Header />
        <h3>Shinohara Book Binding inc.</h3>
        <h5>Fukuoka Japan</h5>
      </div>
      <div className="hero">
        <div className="btn">
          <div className="a-size">
            <button className="ui primary basic button">
              <Link to="./A4">A4</Link>
            </button>
            <button className="ui primary basic button">
              <Link to="./A5">A5</Link>
            </button>
            <button className="ui primary basic button">
              <Link to="./A6">A6</Link>
            </button>
          </div>
          <div className="b-size">
            <button className="ui primary basic button">
              <Link to="./B5">B5</Link>
            </button>
            <button className="ui primary basic button">
              <Link to="./B6">B6</Link>
            </button>
            <button className="ui primary basic button">
              <Link to="./46">四六</Link>
            </button>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
