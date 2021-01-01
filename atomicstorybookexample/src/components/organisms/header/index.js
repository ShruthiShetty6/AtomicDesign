import React from "react";
import NavMenu from "../../molecules/navmenu";
import Logo from "../../molecules/logo";
import Search from "../../molecules/search";
import Login from "../../molecules/login";
import "./style.css";

const Header = (props) => {
  return (
    <div>
      <div className={"styles-navWrapper"}>
        <Logo/>
        <NavMenu />
        <Search/>
        <Login/>
      </div>
    </div>
  );
};

export default Header;
