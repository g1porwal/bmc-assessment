import React from "react";

const Input = (props) => {
  return (
    <input
      id={props.id}
      required
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

export default Input;
