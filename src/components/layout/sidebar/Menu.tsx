import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  path?: any;
  Icon: IconType;
  title: string;
}

const Menu: React.FC<Props> = ({ path, Icon, title }) => {
  return (
    <li className="my-6 ml-2 text-lg">
      <Link href={path} className="flex items-center text-base-paragraph">
        <div className="flex items-center">
          <Icon className="h-6 w-6 mr-3"/>
        </div>
        {title}
      </Link>
    </li>
  );
};

export default Menu;
