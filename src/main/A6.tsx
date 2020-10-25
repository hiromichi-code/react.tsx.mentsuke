import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const A6 = () => {
  return(
    <div className="main">
      <div className="sub-header">
        <h1><span>Mentsuke App</span>A6</h1>
      </div>
      <div className="design">
        <h1>a</h1>
      </div>
      <div className="sub-hero">
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
        <a className="backToHome">
            <Link to="./">Back To Home</Link>
          </a>
      </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
};

export default A6;