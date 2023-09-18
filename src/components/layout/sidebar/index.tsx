import React, { useState } from "react";
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
import { FaTimes } from "react-icons/fa";

interface Props {
  isVisible: boolean;
  onHandleVisible: () => void;
}

const Sidebar: React.FC<Props> = ({ isVisible, onHandleVisible }) => {
  
  return (
    <div
      className={`${
        isVisible ? "" : "translate-x-[-100%] xl:translate-x-0"
      } w-full max-w-[20rem] p-4 bg-white shadow-xl shadow-blue-gray-900/5 z-20 xl:z-0 translate-x-0 fixed top-0 xl:relative h-screen`}
    >
      <div className="mb-2 p-4">
        <img src="/images/logo/logo.png" alt="" className="w-[100px]" />
        <button onClick={onHandleVisible} className="xl:hidden">
          <FaTimes className="text-xl lg:relative absolute bg-base-green rounded-full text-white p-1 h-6 w-6 top-4 right-4" />
        </button>
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
    </div>
  );
};

export default Sidebar;
