import React from 'react';

const Button = (props) => {
  return(
    <div className="btn">
      <button className="ui primary button">
        {props.title}
      </button>
    </div>
  );
}

export default Button;