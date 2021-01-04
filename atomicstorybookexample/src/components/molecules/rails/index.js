import React from "react";
import { List } from "./railsdata";
import Image from "../../atoms/Image";
import "./style.css";

const Rails = (props) => {
  return (
    <div className="railWrapper">
      {List.map((item, index) => {
        return (
          <div className="styleWrapper">
            <div className="thumbnail">
              <div className="placeholder">
                <Image src={item} key={index} className="imgWrapper" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rails;
