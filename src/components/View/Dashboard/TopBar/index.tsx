import Search from "#/components/common/form/Search";
import Button from "#/components/Button/btn-primary";
import React from "react";
import UserPanel from "./UserDropDown";
import Notification from "./Notification";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-[100px] gap-10 py-5 px-14">
      <div className="w-3/4">
        <Search />
      </div>
      <div className="w-1/4 flex justify-around items-center">
        <Button text="Documentation" isTransparent />
        <Notification />
        <UserPanel />
      </div>
    </div>
  );
};

export default TopBar;
