import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface CardProps {
  image: string;
  icon: string;
  desc: string;
  date: string;
  category: string;
}

const CardBlock: React.FC<CardProps> = ({
  image,
  icon,
  desc,
  date,
  category,
}) => {
  return (
    <div className="rounded-2xl shadow bg-white">
      <div className="relative">
        <img src={image} alt={category} className="rounded-t-2xl w-full" />
        <div className="px-8">
          <img
            src={icon}
            alt={category}
            className="icon absolute -bottom-6 h-14 w-14 bg-white shadow p-3 rounded-full"
          />
        </div>
      </div>
      <div className="py-5 px-8 mt-6">
        <h4 className="text-xl font-poppins font-medium pb-5">{desc}</h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-regular text-base-black font-poppins">
              {date}
            </span>
            <span className="text-sm px-3 shadow-inner ml-5 font-poppins py-[1px] rounded-full font-semibold text-white bg-gradient-to-r from-base-green to-base-blue ">
              {category}
            </span>
          </div>
          <a href="#"><FiArrowUpRight className="text-base-paragraph text-3xl" /></a>
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
