import React from "react";
import FooterContent from "../../molecules/footercontent";
import "./style.css";

const Footer = (props) => {
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
    <div>
      <div className={"styles-footerWrapper"}>
        <FooterContent />
      </div>
    </div>
  );
};

export default Footer;
