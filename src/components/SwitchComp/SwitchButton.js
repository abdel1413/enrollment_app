import React from "react";
import "./Switchbutton.css";
const SwitchButton = ({ label, test, setTest }) => {
  return (
    <div className="container">
      <div className="labelstyle">{label} </div>

      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          checked={test}
          onChange={(ev) => setTest(ev.target.checked)}
          name={label}
          id={label}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
        </label>
      </div>
    </div>
  );
};
export default SwitchButton;
