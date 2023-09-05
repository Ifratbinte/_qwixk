import Link from "next/link";
import React, { useState } from "react";

const NavItem = ({ title, items, path, isSubmenu }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  console.log({ items });

  return (
    <li className="relative inline-block text-left">
      <a
        href={path}
        className="inline-flex justify-center items-center w-full rounded-md  px-4 py-2 mx-3 text-lg font-medium text-gray-800 hover:text-base-green"
        onClick={toggleDropdown}
      >
        {title}
      </a>

      {isOpen && (
        <>
          {items == "" ? null : (
            <div className="origin-top-left absolute left-6 mt-2 w-56 rounded-md shadow-lg z-30 bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
              >
                {items.map((item: any, index: number) => (
                  <a
                    key={index}
                    href={item.path}
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default NavItem;
