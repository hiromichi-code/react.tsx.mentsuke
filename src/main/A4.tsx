import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../main/A4.css";
import SixteenLeft from "../components/SixteenLeft";
import SixteenRight from "../components/SixteenRight";
import Select from "../components/Select";

const A4 = () => {
  return (
    <div className="main">
      <div className="sub-header">
        <h1>
          <span>Mentsuke App</span> A4
        </h1>
      </div>
      <div className="select">
        <Select />
      </div>
      <div className="design">
        <div className="design-one">
          <SixteenLeft />
        </div>
        <div className="design-two">
          <SixteenRight />
        </div>
      </div>
      <div className="paper-size">
        <div className="paper-size-left">939×636</div>
        <div className="paper-size-right">880×625</div>
      </div>
      <div className="sub-hero">
        <div className="btn">
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

export default A4;
