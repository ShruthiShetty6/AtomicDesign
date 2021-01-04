import React from "react";
import "./style.css";
import Title from "../../atoms/title";
import Text from "../../atoms/text";

const HeroText = (props) => {
  return (
    <div>
      <Title className="titleText">TOP GEAR Ft. CLARKSON, HAMMOND, MAY</Title>
      <Text className="description">
        Top Gear irreverently celebrates everything that's brilliant about cars.
      </Text>
    </div>
  );
};

export default HeroText;
