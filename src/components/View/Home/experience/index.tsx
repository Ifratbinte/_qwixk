import TextBlock from "#/components/common/TextBlock";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabComponent from "#/components/common/Tabs";
import "react-tabs/style/react-tabs.css";
import tabData from "#/__mocks__/experience.json";
import { VscVmConnect } from "react-icons/vsc";
import tab_option, { TabOptionInterface } from "./TabOption";
import { ReactSVG } from 'react-svg'
const Experience = () => {
  const [value, setValue] = useState(0);
  console.log({ tab_option });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function tabProps(index: number) {
    return {
      id: `exp-tab-${index}`,
      "aria-controls": `exp-tabpanel-${index}`,
    };
  }
  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
      <div className="lg:w-5/6 mx-auto">
        <TextBlock
          title={tabData.title}
          desc={tabData.subtitle}
          isCenter
          isHeader
        />
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="exp_tabs"
            className="!justify-around xl:w-5/6 mx-auto"
          >
            {tab_option.map((tab: TabOptionInterface, index: number) => {
              return (
                <Tab
                  key={index}
                  label={tab.title}
                  icon={<tab.Icon/>}
                  iconPosition="start"
                  {...tabProps(index)}
                  className="font-poppins xl:text-xl text-base rounded-xl bg-white py-5 px-6 xl:gap-2 w-1/3 capitalize"
                />
              );
            })}
          </Tabs>
        </Box>

        {tabData.tabs.map((tabContent: any, index: number) => {
          return (
            <TabComponent value={value} index={index}>
              <div className="flex lg:flex-row flex-col justify-around items-center lg:gap-20 gap-10 lg:px-28 px-10 lg:py-20 py-12 shadow-base rounded-xl">
                <img
                  src={tabContent.gfx}
                  alt={tabContent.title}
                  className="xl:w-[500px]"
                />
                <TextBlock
                  title={tabContent.title}
                  desc={tabContent.content_desc}
                  isJustify
                  title_style="text-4xl"
                />
              </div>
            </TabComponent>
          );
        })}
      </Box>
    </div>
  );
};

export default Experience;
