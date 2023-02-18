import React from "react";
export const Controls = (props) => {
  const handleCheckbox = (value) => {
    props.isChecked(value);
  };

  return (
    <label style={{ display: "flex", alignItems: "center", margin: "20px" }}>
      {" "}
     <span> сначала недорогие</span>
      <input
      style={{ display: "inline-flex", height: "20px", width: "20px" }}
        type="checkbox"
        className="checkbox"
        checked={props.checked}
        onChange={(event) => handleCheckbox(event.target.checked)}
      ></input>
    </label>
  );
};
