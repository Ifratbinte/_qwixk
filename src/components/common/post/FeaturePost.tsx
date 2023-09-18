import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Redirect from "../widgets/redirect";

interface Props {
  category: string;
  title: string;
  read_time: string;
}

const FeaturePost: React.FC<Props> = ({ category, title, read_time }) => {
  return (
    <div className="px-3 cursor-pointer">
      <div className="xl:text-xl text-lg xl:pb-4 pb-2"> {category}</div>
      <div className="xl:text-2xl text-xl font-semibold xl:pb-8 pb-5 xl:leading-10 leading-7">{title}</div>
      <div className="flex items-center gap-10">
        <span className="xl:text-lg text-base">{read_time}</span>
        <Redirect title="View Details"/>
      </div>
      <div className="divider border-2 border-slate-100 xl:my-10 my-6"></div>
    </div>
  );
};

export default FeaturePost;
