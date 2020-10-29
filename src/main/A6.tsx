import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Select from "../components/Select";
import SixteenLeft from "../components/SixteenLeft";
import SixteenRight from "../components/SixteenRight";
import ThirtyTwoLeft from "../components/ThirtyTwoLeft";
import ThirtyTwoRight from "../components/ThirtyTwoRight";
import EightLeft from "../components/EightLeft";
import EightRight from "../components/EightRight";

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
        <div className="design-child">
          <ThirtyTwoLeft />
          <div className="paper-size">
            <div className="paper-size-left">636×469（16p+16p）</div>
          </div>
        </div>
        <div className="design-child">
          <ThirtyTwoRight />
          <div className="paper-size">
            <div className="paper-size-Right">625×440（16p+16p）</div>
          </div>
        </div>
        <div className="design-child">
          <SixteenLeft />
          <div className="paper-size">
            <div className="paper-size-left">469×318（16p）</div>
          </div>
        </div>
        <div className="design-child">
          <SixteenRight />
          <div className="paper-size">
            <div className="paper-size-right">440×312（16p）</div>
          </div>
        </div>
        <div className="design-child">
          <SixteenLeft />
          <div className="paper-size">
            <div className="paper-size-left">469×318（8p+4p+2p）</div>
          </div>
        </div>
        <div className="design-child">
          <SixteenRight />
          <div className="paper-size">
            <div className="paper-size-right">440×312（8p+4p+2p）</div>
          </div>
        </div>
        <div className="design-child">
          <EightLeft />
          <div className="paper-size">
            <div className="paper-size-left">636×469（8p）</div>
          </div>
        </div>
        <div className="design-child">
          <EightRight />
          <div className="paper-size">
            <div className="paper-size-right">625×440（8p）</div>
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