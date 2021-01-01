/* @flow */
import * as React from "react";
import "./style.css";

const Input = (props) => {
  return (
    <input
      type="text"
      placeholder="Search for a show, episode,shorts etc"
      className="search"
    ></input>
  );
};

Input.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Input;
