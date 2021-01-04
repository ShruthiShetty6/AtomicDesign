import React from "react";
import "./style.css";

const Image = (props) => {
  return <img src={props.src} className={props.className}></img>;
};

export default Image;
