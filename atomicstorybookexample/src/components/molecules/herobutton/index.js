import React from "react";
import Button from "../../atoms/button";
import './style.css';

const HeroButton = (props) => {
  return (
    <div className="heroBtn">
      <Button className="btnStyle">New</Button>
      <Button className="btnStyle">Don't Miss</Button>
    </div>
  );
};

export default HeroButton;
