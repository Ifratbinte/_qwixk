import CustomTabs from "#components/common/Tabs/CustomTab";
import React, { useState } from "react";

import PanelActionBtn from "#/components/Button/panel-action-button";
import { FiEdit, FiPlus } from "react-icons/fi";
import PendingResponse from "./Pending-response";
import CompletedResponse from "./Completed-response";
type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Pending Response",
    index: 1,
    Component: PendingResponse,
  },
  {
    label: "Completed Response",
    index: 2,
    Component: CompletedResponse,
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
      />
    </div>
  );
};

export default CMS;
