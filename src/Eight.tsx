import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const Eight = () => {
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className="btn">
        <button className="ui primary basic button">
          <Link to="/">HOME</Link>
        </button>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Eight;