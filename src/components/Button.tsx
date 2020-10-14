import React from 'react';

interface ButtonProps {
  title: string
}

const Button = (props: ButtonProps) => {
    return(
      <div className="btn">
        <button className="ui primary button">
          {props.title}
        </button>
      </div>
    );
}

export default Button;