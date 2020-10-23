import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
      </div>
      <div className="design">
        <h1>a</h1>
      </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
};

export default Two;