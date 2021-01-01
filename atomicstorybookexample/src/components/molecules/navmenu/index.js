import React from "react";
import NavLink from "../../atoms/navlink";

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
  const {
    className = "",
    children,
    text = "",
    url = "",
    target = "",
    image,
    ...rest
  } = props;

  return (
    <div className="nav--outer">
      {NavBarData.map((item, index) => {
        return <NavLink key={index} className={item.cName} name={item.title} />;
      })}
    </div>
  );
};

export default NavMenu;
