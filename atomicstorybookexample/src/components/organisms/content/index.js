import React from "react";
import Rails from "../../molecules/rails";
import RailVideo from "../../molecules/railvideos";
import HeroText from "../../molecules/herotext";
import HeroButton from "../../molecules/herobutton";
import Image from "../../atoms/Image";
import "./style.css";

const Content = (props) => {
  return (
    <div className="bodycontent">
      <div className="flexDiv">
        <div className="textDiv">
          <HeroText />
          <div className="btnDiv">
            <HeroButton />
          </div>
        </div>
        <div className="wrapper">
          <div className="imgDiv">
            <Image
              src="https://ap2-prod-images.disco-api.com/2020/12/31/729fb267-2875-4747-b575-2ff3ac07f59b.jpeg?bf=0&f=jpg&p=true&q=75&w=840"
              className="imageBanner"
            />
            ;
          </div>
        </div>
      </div>
      <Rails />
      <RailVideo />
      <RailVideo />
      <RailVideo />
    </div>
  );
};

export default Content;
