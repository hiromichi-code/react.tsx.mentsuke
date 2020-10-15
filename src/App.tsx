import React from "react";
import image from "./images/book.svg";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="welcome">
      <div className="header">
        <Header />
      </div>
      <h3>Shinohara Book Binding inc.</h3>
      <h5>Fukuoka Japan</h5>
      <div className="btn">
        <Button title="start" />
      </div>
      <img src={image} alt="book" />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
