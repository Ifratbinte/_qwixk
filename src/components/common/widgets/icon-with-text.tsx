import React from "react";
import { FeaturedInterface } from "#/interface";

const IconText: React.FC<FeaturedInterface> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={icon} alt="Icon" />
      <div className="text-xl">{text}</div>
    </div>
  );
};

export default IconText;
