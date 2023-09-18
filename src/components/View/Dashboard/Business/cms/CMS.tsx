import CustomTabs from "#components/common/Tabs/CustomTab";
import React, { useState } from "react";
import Recent from "./Recent";
import Pending from "./Pending";
type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Recent Post",
    index: 1,
    Component: Recent,
  },
  {
    label: "Pending Post",
    index: 2,
    Component: Pending,
  },
];

const CMS = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="py-6">
      <CustomTabs
        selectedTab={selectedTab}
        onClick={setSelectedTab}
        tabs={tabs}
        isButton
      />
    </div>
  );
};

export default CMS;
