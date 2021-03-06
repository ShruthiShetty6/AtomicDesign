import * as React from "react";
import classnames from 'classnames'
import styles from "./style.css";

const Title = (props) => (
  <h1 className="title">
    {props.children}
  </h1>
);

Title.defaultProps = {
  className: "",
  children: "",
};

export default Title;
