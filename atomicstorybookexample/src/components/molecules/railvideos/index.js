import React from "react";
import { List } from "./railsdata";
import Image from "../../atoms/Image";
import Text from "../../atoms/text";
import "./style.css";

const RailVideo = (props) => {
  return (
    <div className="railVideoMain">
      <Text className="videoHeader">Watch and Learn</Text>
      <div className="railVideoWrapper">
        {List.map((item, index) => {
          return (
            <div className="styleContainer">
              <div className="thumbnailContainer">
                <Image src={item} key={index} className="videoImg" />;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RailVideo;
