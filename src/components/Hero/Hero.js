import React from "react";
import PropTypes from "prop-types";

import Heading from "../Heading/Heading";
import Spacer from "../Spacer/Spacer";

import "./Hero.scss";

const Hero = ({ heading, subtext, subcomponent }) => {

  return (
    <>
      <Heading level={1}>{heading}</Heading>
      {subtext && (
        <>
          <Spacer size="medium" />
          <h3 className="hero-subtext">
            {subtext}
          </h3>
        </>
      )}
      {subcomponent && subcomponent}
    </>
  );
};

Hero.propTypes = {
  heading: PropTypes.string,
  subtext: PropTypes.string,
  subcomponent: PropTypes.node
};

export default Hero;
