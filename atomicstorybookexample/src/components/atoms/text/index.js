import * as React from "react";
import classnames from "classnames";
import "./style.css";

const Text = (props) => <h6 className="subtitle">{props.children}</h6>;

Text.defaultProps = {
  className: "",
  children: "",
};

export default Text;
