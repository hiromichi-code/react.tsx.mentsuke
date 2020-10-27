import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Select from "../components/Select";
import SixteenLeft from "../components/SixteenLeft";
import SixteenRight from "../components/SixteenRight";

const A6 = () => {
  return(
    <div className="main">
      <div className="sub-header">
        <h1><span>Mentsuke App</span>A6</h1>
      </div>
      <div className="select">
        <Select />
      </div>
      <div className="design">
        <div className="design-one">
          <SixteenLeft />
          <div className="paper-size">
            <div className="paper-size-left">939×636（16p）</div>
          </div>
        </div>
        <div className="design-two">
          <SixteenRight />
          <div className="paper-size">
            <div className="paper-size-right">880×625（16p）</div>
          </div>
        </div>
        <div className="design-three">
          <SixteenLeft />
          <div className="paper-size">
            <div className="paper-size-right">939×636（14p）</div>
          </div>
        </div>
        <div className="design-four">
          <SixteenRight />
          <div className="paper-size">
            <div className="paper-size-right">880×625（14p）</div>
          </div>
        </div>
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
        <div className="backToHome">
            <Link to="./">Back To Home</Link>
          </div>
      </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
};

export default A6;