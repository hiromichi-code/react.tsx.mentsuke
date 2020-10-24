import React from "react";
import "../components/Select.scss";

const Select = () => {
  return (
    <div className="l-select">
      <div className="l-select-primary">
        <div className="l-method">
          <button className="method">無線</button>
          <button className="method">アジロ</button>
          <button className="method">糸かがり</button>
          <button className="method">中綴じ</button>
        </div>
      </div>
      <div className="l-select-secondary">
        <div className="l-direction">
          <div className="leftDirection">
            <button className="direction">左綴じ 長辺綴じ</button>
            <button className="direction">左綴じ 短辺綴じ</button>
          </div>
          <div className="rightDirection">
            <button className="direction">右綴じ 長辺綴じ</button>
            <button className="direction">右綴じ 短辺綴じ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
