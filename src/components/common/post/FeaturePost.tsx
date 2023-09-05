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
      <div className="text-xl pb-4"> {category}</div>
      <div className="text-2xl font-semibold pb-8 leading-10">{title}</div>
      <div className="flex items-center gap-10">
        <span className="text-lg">{read_time}</span>
        <Redirect title="View Details"/>
      </div>
      <div className="divider border-2 border-slate-100 my-10"></div>
    </div>
  );
};

export default FeaturePost;
