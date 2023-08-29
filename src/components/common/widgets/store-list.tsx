import React from "react";
interface ListInterface {
  path: string;
  icon: string;
}

const StoreList: React.FC<ListInterface> = ({ path, icon }) => {
  return (
    <li className="mx-1">
      <a href={path}>
        <img src={icon} alt="store" />
      </a>
    </li>
  );
};

export default StoreList;
