import React from "react";
import classnames from "classnames";
import classes from "./style.css";

const NavLink = (props) => {
  const {
    className = "",
    children,
    text = "",
    url = "",
    target = "",
    image,
    name,
    ...rest
  } = props;

  return (
    <a className={classes.anchor} href={url} target={target} {...rest}>
      {name}
    </a>
  );
};

export default NavLink;
