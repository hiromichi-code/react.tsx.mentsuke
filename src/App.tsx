import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="./" component={Home} />
      <Route exact path="./Sixteen" component={Sixteen} />
      <Route exact path="./Eight" component={Eight} />
      <Route exact path="./Four" component={Four} />
      <Route exact path="./Two" component={Two} />
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
            <Link to="./Sixteen">16頁</Link>
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
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

const Sixteen = () => {
  return(
    <div className="main">
      <div className="sub-header">
        <h1><span>Mentsuke App</span>  16page</h1>
      </div>
      <div className="sub-hero">
        <div className="btn">
          <button className="ui primary basic button">
            <Link to="./">Home</Link>
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
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};
const Eight = () => {
  return(
    <div className="main">
      <div className="sub-header">
        <h1><span>Mentsuke App</span>  8page</h1>
      </div>
      <div className="sub-hero">
        <div className="btn">
          <button className="ui primary basic button">
            <Link to="./">Home</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Sixteen">16頁</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Four">4頁</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Two">2頁</Link>
          </button>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};
const Four = () => {
  return(
    <div className="main">
      <div className="sub-header">
        <h1><span>Mentsuke App</span>  4page</h1>
      </div>
      <div className="sub-hero">
        <div className="btn">
          <button className="ui primary basic button">
            <Link to="./">Home</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Sixteen">16頁</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Eight">8頁</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Two">2頁</Link>
          </button>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};
const Two = () => {
  return(
    <div className="main">
      <div className="sub-header">
        <h1><span>Mentsuke App</span>  2page</h1>
      </div>
      <div className="sub-hero">
        <div className="btn">
          <button className="ui primary basic button">
            <Link to="./">Home</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Sixteen">16頁</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Eight">8頁</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Four">4頁</Link>
          </button>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
