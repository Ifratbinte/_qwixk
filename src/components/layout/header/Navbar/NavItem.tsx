import Link from "next/link";
import React from "react";
import { NavInterface } from "./MenuItems";

interface Props {
  item: NavInterface;
}

const NavItem: React.FC<Props> = ({ item }) => {
  return (
    <li className="list unstyled py-2 lg:px-6 xl:px-8">
      <Link className="flex items-center font-poppins font-medium text-xl text-gray-500 active:text-black" href={item.path}>
        {item.title}
      </Link>
    </li>
  );
};

export default NavItem;
