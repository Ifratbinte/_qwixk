import React from "react";
import SectionHeader from "#/components/section-header";
import section_header from "#/__mocks__/sectionHeader.json";
import AboutContent from "#/components/View/About";
import CTA from "#/components/View/Home/cta";

const About = () => {
  return (
    <>
      <SectionHeader
        title={section_header.about.title}
        subtitle={section_header.about.Subtitle}
        isThumb
      />
      <AboutContent />
      <CTA/>
    </>
  );
};

export default About;
