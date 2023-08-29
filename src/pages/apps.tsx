import React from "react";
import Cooking from "#/components/Cooking";
import Entertainment from "#/components/View/Apps/Entertainment";
import Finance from "#/components/View/Apps/Finance";
import Productivity from "#/components/View/Apps/Productivity";
import Utilities from "#/components/View/Apps/Utilities";
import AppSlider from "#/components/View/Apps/AppSlider";

const AppsPage = () => {
  return (
    <>
      <AppSlider />
      <Finance />
      <Productivity />
      <Entertainment />
      <Utilities />
      {/* <Cooking/> */}
    </>
  );
};

export default AppsPage;
