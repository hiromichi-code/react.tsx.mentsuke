import React from "react";
import { Link } from "react-router-dom";

import image from "./images/book.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <h3>Shinohara Book Binding inc.</h3>
      <h5>Fukuoka Japan</h5>
      <div className="btn">
        <button className="ui primary basic button">
          <Link to="/Sixteen">16頁</Link>
        </button>
        <button className="ui primary basic button">
          <Link to="/eight">8頁</Link>
        </button>
        <button className="ui primary basic button">
          <Link to="/four">4頁</Link>
        </button>
        <button className="ui primary basic button">
          <Link to="/two">2頁</Link>
        </button>
      </div>
      <img src={image} alt="book" />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
