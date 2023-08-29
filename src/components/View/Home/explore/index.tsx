import * as React from "react";
import tabData from "#/__mocks__/explore.json";
import TextBlock from "#/components/common/TextBlock";
import VerticalTab from "#/components/common/VerticalTab/Tabs";
import explore from "#/__mocks__/explore.json";

const ExploreTabs = () => {
  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
      <div className="lg:w-5/6 mx-auto">
        <TextBlock
          title={tabData.title}
          desc={tabData.subtitle}
          isCenter
          isHeader
          // title_style="text-2xl lg:text-5xl"
        />
      </div>
      <VerticalTab data={explore.explore_list} />
    </div>
  );
};

export default ExploreTabs;
