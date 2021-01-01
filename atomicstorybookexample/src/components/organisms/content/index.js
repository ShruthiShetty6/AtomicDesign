import React from "react";
import Rails from "../../molecules/rails";
import RailVideo from "../../molecules/railvideos";
import "./style.css";

const Content = (props) => {
  return (
    <div className="bodycontent">
      <Rails />
      <RailVideo />
      <RailVideo />
    </div>
  );
};

export default Content;
