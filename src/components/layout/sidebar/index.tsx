import React from "react";
import { Card } from "@material-tailwind/react";
import Menu from "./Menu";
import global_menu_data, {
  GlobalItemInterface,
} from "#/components/instance/sidebar/global";
import advance_menu_data, {
  AdvanceItemInterface,
} from "#/components/instance/sidebar/advance";
import business_menu_data, {
  BusinessItemInterface,
} from "#/components/instance/sidebar/business";
import support_menu_data, {
  SupportItemInterface,
} from "#/components/instance/sidebar/support";

const Sidebar = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        {/* <img src="/images/logo/logo.png" alt="" /> */}
        <div className="text-xl">Logo</div>
      </div>
      <div className="px-4">
        <ul>
          {global_menu_data.map((global: GlobalItemInterface) => {
            return (
              <Menu
                key={global.id}
                Icon={global.Icon}
                title={global.title}
                path={global.path}
              />
            );
          })}
        </ul>
        <h4 className="text-lg mt-10 mb-3 text-black font-medium">Advance</h4>
        <ul>
          {business_menu_data.map((business: BusinessItemInterface) => {
            return (
              <Menu
                key={business.id}
                Icon={business.Icon}
                title={business.title}
                path={business.path}
              />
            );
          })}
        </ul>
        <h4 className="text-lg mt-10 mb-3 text-black font-medium">Business</h4>
        <ul>
          {advance_menu_data.map((advance: AdvanceItemInterface) => {
            return (
              <Menu
                key={advance.id}
                Icon={advance.Icon}
                title={advance.title}
                path={advance.path}
              />
            );
          })}
        </ul>
        <h4 className="text-lg mt-10 mb-3 text-black font-medium">Support</h4>
        <ul>
          {support_menu_data.map((support: SupportItemInterface) => {
            return (
              <Menu
                key={support.id}
                Icon={support.Icon}
                title={support.title}
                path={support.path}
              />
            );
          })}
        </ul>
      </div>

      {/* <List className="mt-10">

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
      </List> */}
    </Card>
  );
};

export default Sidebar;
