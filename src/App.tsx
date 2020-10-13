import React from 'react';
import image from './images/book.svg';
import Button from './components/Button';

import './App.css';

const App = () => {
  return(
    <div className="welcome">
      <h1 className="ui header">mentsuke</h1>
      <h4 className="ui header">shinohara Book Binding inc.</h4>
      <h5 className="ui header">Fukuoka Japan</h5>
      <div className="btn">
        <Button />
      </div>
      <img src={image} alt="book"/>
      <footer>&copy;Shinohara Book Binding inc.</footer>
    </div>
  );
}

export default App;