import React from "react";
import { List } from "./railsdata";
import Image from "../../atoms/Image";
import "./style.css";

const RailVideo = (props) => {
  return (
    <div className="railVideoWrapper">
      {List.map((item, index) => {
        return (
          <div className="styleContainer">
            <Image src={item} key={index} />;
          </div>
        );
      })}
    </div>
  );
};

export default RailVideo;
