import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/Sixteen" component={Sixteen} />
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
          <button className="ui primary basic button">8頁</button>
          <button className="ui primary basic button">4頁</button>
          <button className="ui primary basic button">2頁</button>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

const Sixteen =()=>{
  return(
    <p>1</p>
  );
}

export default App;
