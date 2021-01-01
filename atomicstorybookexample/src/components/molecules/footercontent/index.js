import React from "react";
import Text from "../../atoms/text";

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
      <Text>hello@discovery.com</Text>
      <Text>
        Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla
        Complex, Mumbai 400051
      </Text>
      <Text>
        +91-8433774761, +91-8072045018 (Mon-Fri, excluding Holidays 11am-4pm),
        022-43491100
      </Text>
    </div>
  );
};

export default Footer;
