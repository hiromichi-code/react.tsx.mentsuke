import React from 'react';
import image from './images/book.svg';
import Button from './components/Button';

import './App.css';

const App = () => {
  return(
    <div className="welcome">
      <h1>Mentsuke App</h1>
      <h3>Shinohara Book Binding inc.</h3>
      <h5>Fukuoka Japan</h5>
      <div className="btn">
        <Button />
      </div>
      <img src={image} alt="book"/>
      <footer>&copy; Shinohara Book Binding inc.</footer>
    </div>
  );
}

export default App;