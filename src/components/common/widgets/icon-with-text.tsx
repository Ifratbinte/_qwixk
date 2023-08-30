import React from "react";
import { IconTextInterface } from "#/interface";

const IconText: React.FC<IconTextInterface> = ({ icon, text, isIcon }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={icon} alt="Icon" />
      <div className="text-lg text-[#222222]">{text}</div>
    </div>
  );
};

export default IconText;
