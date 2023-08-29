import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { FiHome, FiGrid, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { BiSupport, BiCreditCard } from "react-icons/bi";

const Sidebar = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <img src="/images/logo/logo.png" alt="" />
      </div>
      <List className="mt-10">
        <Accordion
          open={open === 1}
          icon={
            <FiChevronDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <FiHome className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dash
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight strokeWidth={3} className="h-3 w-5 mr-3" />
                </ListItemPrefix>
                Analytics
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        
        <ListItem>
          <ListItemPrefix>
            <FiGrid className="h-7 w-5 mr-3" />
          </ListItemPrefix>
          Apps
        </ListItem>

        <h4 className="text-lg mr-3 py-3">General</h4>
        <ListItem>
          <ListItemPrefix>
            <BiSupport className="h-5 w-5 mr-3" />
          </ListItemPrefix>
          Support
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BiCreditCard className="h-5 w-5 mr-3" />
          </ListItemPrefix>
          Resources
        </ListItem>
      </List>
    </Card>
    
  );
};

export default Sidebar;
