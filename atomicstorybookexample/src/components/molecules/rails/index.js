import React from "react";
import {List} from "./railsdata";
import Image from "../../atoms/Image";
import "./style.css";

const Rails = (props) => {
  return (
    <div className="railWrapper">
      {List.map((item, index) => {
        return <Image src={item} key={index}/>;
      })}
    </div>
  );
};

export default Rails;
