import MarketingContent from "#/components/View/Dashboard/Business/marketing";
import PanelHead from "#/components/common/PanelHead";
import React from "react";

const Marketing = () => {
  return (
    <div className="bg-white shadow-base h-full rounded-xl p-14">
      <PanelHead title="Marketing" />
      <MarketingContent />
    </div>
  );
};

export default Marketing;
