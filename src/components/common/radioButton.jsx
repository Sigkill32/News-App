import React from "react";

const RadioButton = ({ className, onHandleRadio, value, checked, name }) => {
  return (
    <div className={className}>
      <input
        type="radio"
        onChange={onHandleRadio}
        value={value}
        checked={checked}
      />{" "}
      <span>{name}</span>
    </div>
  );
};

export default RadioButton;
