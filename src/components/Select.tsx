import React from "react";
import "../components/Select.scss";

const Select = () => {
  return (
    <div className="l-select">
      <div className="l-select-primary">
        <div className="check-method">
          <label>
            <input type="radio" name="method" value="1" />
            無線
          </label>
          <label>
            <input type="radio" name="method" value="2" />
            アジロ
          </label>
          <label>
            <input type="radio" name="method" value="3" />
            糸かがり
          </label>
          <label>
            <input type="radio" name="method" value="4" />
            中綴じ
          </label>
        </div>
      </div>
      <div className="l-select-secondary">
        <div className="check-direction">
          <label>
            <input type="radio" name="direction" value="1" />
            左綴じ
          </label>
          <label>
            <input type="radio" name="direction" value="2" />
            右綴じ
          </label>
        </div>
      </div>
    </div>
  );
};

export default Select;
