import CustomTabs from "#components/common/Tabs/CustomTab";
import React, { useState } from "react";

import PanelActionBtn from "#/components/Button/panel-action-button";
import { FiEdit, FiPlus } from "react-icons/fi";
import Notification from "./Notification";
import Message from "./Message";
import Advertisement from "./Advertisement";
type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Notification",
    index: 1,
    Component: Notification,
  },
  {
    label: "Message",
    index: 2,
    Component: Message,
  },
  {
    label: "Advertisement",
    index: 3,
    Component: Advertisement,
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
