import Search from "#/components/common/form/Search";
import Button from "#/components/Button/btn-primary";
import React from "react";
import UserPanel from "./UserDropDown";
import Notification from "./Notification";
import { FiAlignJustify } from "react-icons/fi";
import { BiFile } from "react-icons/bi";

const TopBar = ({ onHandleVisible }: { onHandleVisible: () => void }) => {
  return (
    <div className="flex justify-between items-center w-full gap-8 py-3">
      <div className="flex items-center gap-3 visible xl:hidden">
        <FiAlignJustify
          className="text-primary h-8 w-8"
          onClick={onHandleVisible}
        />
        <div>
          <img src="/images/logo/logo.png" alt="" className="w-[100px]" />
        </div>
      </div>

      <div className="w-3/4">
        <Search placeholder="Search Support" />
      </div>
      <ul className="flex gap-3 items-center justify-between last:justify-end w-1/4">
        <li>
          <BiFile
            title="Documentation"
            className="h-12 w-12 text-[#526484] cursor-pointer relative hover:bg-green-50 hover:text-green-500 rounded-full transition-all ease-in-out delay-150 p-2"
          />
        </li>
        <li>
          <Notification />
        </li>
        <li>
          <UserPanel />
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
