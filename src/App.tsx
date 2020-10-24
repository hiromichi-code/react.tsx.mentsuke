import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import A4 from "./main/A4";
import Eight from "./main/Eight";
import Four from "./main/Four";
import Two from "./main/Two";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter basename="/react.tsx.mentsuke">
      <Route exact path="/" component={Home} />
      <Route exact path="/A4" component={A4} />
      <Route exact path="/Eight" component={Eight} />
      <Route exact path="/Four" component={Four} />
      <Route exact path="/Two" component={Two} />
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
          <button className="ui primary basic button">
            <Link to="./A4">A4</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Eight">8頁</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Four">4頁</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Two">2頁</Link>
          </button>
        </div>
      </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
};

export default App;
