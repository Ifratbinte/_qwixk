import CMSContent from "#/components/View/Dashboard/Business/cms/CMS";
import PanelHead from "#/components/common/PanelHead";
import React from "react";

const CMS = () => {
  return (
    <div className="bg-white shadow-base h-full rounded-xl p-6 xl:p-14">
      <PanelHead title="CMS" />
      <CMSContent />
    </div>
  );
};

export default CMS;
