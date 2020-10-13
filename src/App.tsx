import React from 'react';
import image from './images/book.svg';

const App = () => {
  return(
    <div className="welcome">
      <h1>mentsuke</h1>
      <h2>shinohara Book Binding inc.</h2>
      <h3>Fukuoka Japan</h3>
      <img src={image} alt="book"/>
    </div>
  );
}

export default App;