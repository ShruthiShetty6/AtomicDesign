import React from "react";
import Text from "../../atoms/text";
import Icon from "../../atoms/Image";
import './style.css';
import callicon from "../../../assets/icn_call.png";

const Footer = (props) => {
  return (
    <div>
      <div className="flexitem">
      <Icon src={callicon}></Icon>
      <Text>hello@discovery.com</Text>
      </div>
     <div className="flexitem">
     <Icon src={callicon}></Icon>
     <Text>
        Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla
        Complex, Mumbai 400051
      </Text>
     </div>
     <div className="flexitem">
     <Icon src={callicon}></Icon>
     <Text>
        +91-8433774761, +91-8072045018 (Mon-Fri, excluding Holidays 11am-4pm),
        022-43491100
      </Text>
     </div>
     <div className="bottomfooter">
     <Text>
      FAQ's
      </Text>
      <Text>
       Privacy Policy
      </Text>
      <Text>
     Terms of Use
      </Text>
     </div>
    </div>
    
  );
};

export default Footer;
