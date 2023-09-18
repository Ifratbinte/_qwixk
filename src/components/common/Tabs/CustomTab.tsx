import PanelActionBtn from "#/components/Button/panel-action-button";
import React, { FC } from "react";
import { FiEdit, FiPlus } from "react-icons/fi";
type TabsProps = {
  tabs: {
    label: string;
    index: number;
    Component: FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
  isButton?: boolean;
};

/**
 * Avalible Props
 * @param className string
 * @param tab Array of object
 * @param selectedTab number
 * @param onClick Function to set the active tab
 * @param orientation Tab orientation Vertical | Horizontal
 */
const Tabs: FC<TabsProps> = ({
  className = "tabs-component",
  tabs = [],
  selectedTab = 0,
  onClick,
  orientation = "horizontal",
  isButton,
}) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <div
      className={
        orientation === "vertical" ? className + " vertical" : className
      }
    >
      <div
        role="tablist"
        aria-orientation={orientation}
        className="flex flex-wrap relative mb-8 border-b-2 border-b-slate-100"
      >
        {tabs.map((tab) => (
          <button
            className={`${
              selectedTab === tab.index
                ? "active border-b-4 border-b-blue-500 text-blue-400"
                : "text-black border-b-4 border-b-transparent"
            } cursor-pointer inline-block font-medium text-xl mr-2 px-4 py-2`}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {isButton && (
        <div className="flex justify-end gap-4 mb-10">
          <PanelActionBtn icon={<FiEdit />} title="Modify" />
          <PanelActionBtn icon={<FiPlus />} title="Create" isBg />
        </div>
      )}

      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && <Panel.Component index={selectedTab} />}
      </div>
    </div>
  );
};
export default Tabs;
