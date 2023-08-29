import React from "react";
import HeroTop from "./HeroTop";
import HeroBottom from "./HeroBottom";

const Hero = () => {
  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
      <HeroTop />
      <HeroBottom />
    </div>
  );
};

export default Hero;
