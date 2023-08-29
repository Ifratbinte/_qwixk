import Installed from "#/components/View/Dashboard/General-apps/Installed";
import OtherApp from "#/components/View/Dashboard/General-apps/Other";
import Recommended from "#/components/View/Dashboard/General-apps/Recommended";
import React from "react";

const GeneralApps = () => {
  return <>
    <Installed/>
    <Recommended/>
    <OtherApp/>
  </>;
};

export default GeneralApps;
