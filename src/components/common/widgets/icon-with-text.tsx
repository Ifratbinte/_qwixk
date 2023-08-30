import React from "react";
import { IconTextInterface } from "#/interface";
// export interface IconTextInterface {
//   icon: string;
//   text: string;
// }
const IconText: React.FC<IconTextInterface> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={icon} alt="Icon" />
      <div className="text-lg text-[#222222]">{text}</div>
    </div>
  );
};

export default IconText;
