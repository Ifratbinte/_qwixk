import * as React from "react";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabComponent: React.FC<TabPanelProps> = ({ children, index, value }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`exp-tabpanel-${index}`}
      aria-labelledby={`exp-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabComponent;
