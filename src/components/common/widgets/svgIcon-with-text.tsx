import React from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  title: string;
}

const SvgText: React.FC<Props> = ({ Icon, title }) => {
  return (
    <li className="flex items-center text-base-paragraph">
      <span className="mr-1">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-lg font-medium">{title}</span>
    </li>
  );
};

export default SvgText;
