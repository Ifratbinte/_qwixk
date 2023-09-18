import React from "react";
import { IconTextInterface } from "#/interface";

const IconText: React.FC<IconTextInterface> = ({ icon, text, isIcon }) => {
  return (
    <div className={`${isIcon ? "gap-3 flex items-center" : ""} xl:ml-2 ml-0 first:ml-0`}>
      {isIcon && <img src={icon} alt="Icon" />}
      <div className={`${isIcon ? "lg:text-lg text-base" : "text-base pl-2"} text-[#222222]`}>
        {!isIcon && <span className="dot relative before:absolute before:content[' '] before:-left-2.5 before:right-0 before:top-[10px] before:bottom-0 before:h-1 before:w-1 before:rounded-full before:bg-gray-500"></span>}
        {text}
      </div>
    </div>
  );
};

export default IconText;
