import Link from "next/link";
import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const TabList = (props: any) => {
  let listData = props.data;

  const handleTabContent = () => {
    props.onClick(props.index);
  };

  console.log("props.index", props.index == 0 ? "ok" : "no");

  return (
    <>
      <li
        className={`${
          props.isActive
            ? "bg-indigo-50 sm:p-12 py-4 rounded-2xl md:mb-14 mb-8 border-l-8 border-indigo-600"
            : "transparent"
        } text-left sm:px-12 px-4 sm:my-5 flex sm:gap-8 gap-3`}
        onClick={() => props.onClick(props.index)}
      >
        <img src={listData.icon} alt="Icon" className="h-[30px]" />
        <div>
          <h5
            className={`${
              props.isActive ? "text-black" : "text-gray-800"
            } md:text-[22px] text-lg font-semibold font-poppins mb-5 cursor-pointer`}
            onClick={handleTabContent}
          >
            {listData.title}
          </h5>
          {}
          {props.isActive && (
            <div className="block">
              <p className="font-poppins sm:text-lg text-base text-base-paragraph sm:mb-8 mb-3">
                {listData.subtitle}
              </p>
              <Link
                href="#"
                className="flex items-center text-black text-sm font-semibold"
              >
                <span className="mr-3">Learn More</span>
                <HiArrowLongRight className="text-2xl" />
              </Link>
            </div>
          )}
        </div>
      </li>
    </>
  );
};

export default TabList;

// ${props.isActive === 0
//   ? "index1-chosen"
//   : props.activeTabId === 1
//   ? "index2-chosen"
//   : "index3-chosen"}
