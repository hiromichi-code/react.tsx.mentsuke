import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Four = () => {
  return(
    <div className="main">
      <div className="sub-header">
        <h1><span>Mentsuke App</span>  4page</h1>
      </div>
      <div className="design">
        <h1>a</h1>
      </div>
      <div className="sub-hero">
        <div className="btn">
          <button className="ui primary basic button">
            <Link to="./A4">A4</Link>
          </button>
          <button className="ui primary basic button">
            <Link to="./Eight">8頁</Link>
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

export default Four;