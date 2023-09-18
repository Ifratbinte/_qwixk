import SectionHeader from "#/components/section-header";
import React from "react";
import section_header from "#/__mocks__/sectionHeader.json";
import SupportOptions from "#/components/View/Support/SupportOptions";
import Search from "#/components/View/Support/SearchTopics";
import QuickLinks from "#/components/View/Support/QuickLinks";
import Slider from "#/components/View/Support/Slider";
import SearchTopic from "#/components/View/Support/SearchTopics";

const Support = () => {
  return (
    <>
      <SectionHeader
        title={section_header.support.title}
        subtitle={section_header.support.Subtitle}
      />
      <Slider />
      <SupportOptions />
      <div className="-mt-10">
        <SearchTopic />
      </div>
      <QuickLinks />
    </>
  );
};

export default Support;
