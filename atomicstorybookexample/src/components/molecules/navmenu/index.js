import React from "react";
import Text from "../../atoms/text";
import "./style.css";

const NavBarData = [
  {
    title: "home",
  },
  {
    title: "Explore",
  },
  {
    title: "Shorts",
  },
  {
    title: "MindBlown",
  },
  {
    title: "Premium",
  },
];

const NavMenu = (props) => {
  return (
    <div className="nav--outer">
      {NavBarData.map((item, index) => {
        return (
          <a key={index} className="anchor">
            <Text>{item.title}</Text>
          </a>
        );
      })}
    </div>
  );
};

export default NavMenu;
