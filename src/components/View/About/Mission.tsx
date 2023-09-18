import React from "react";
import missionData from "#/__mocks__/about.json";
import TextBlock from "#/components/common/TextBlock";

const Mission = () => {
  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
      <div className="lg:flex lg:items-center gap-20 px-6 sm:0">
        <div className="lg:w-5/12">
          <img src="./images/thumb/about/mission.png" alt="" />
        </div>
        <div className="lg:w-7/12 mt-7 lg:mt-0">
          <div className="text-4xl font-semibold mb-11">
            Our
            <span className="text-base-green-medium ml-3">Mission</span>
          </div>
          <p className="lg:text-lg text-base text-justify md:leading-loose leading-relaxed">{missionData.mission_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
