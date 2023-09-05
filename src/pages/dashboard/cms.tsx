import CMSContent from "#/components/View/Dashboard/Business/CMS";
import PanelHead from "#/components/common/PanelHead";
import React from "react";

const CMS = () => {
  return (
    <div className="bg-white shadow-base rounded p-6">
      <PanelHead title="CMS" />
      <CMSContent/>
    </div>
  );
};

export default CMS;
