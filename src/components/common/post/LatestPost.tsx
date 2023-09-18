import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import IconText from "../widgets/icon-with-text";
import Redirect from "../widgets/redirect";

export interface IconTextInterface {
  icon: string;
  text: string;
}
export interface LatestInterface {
  thumb: string;
  category: string;
  post_title: string;
  desc: string;
  post_wgd: IconTextInterface[];
}

const LatestPost: React.FC<LatestInterface> = ({
  thumb,
  category,
  post_title,
  desc,
  post_wgd,
}) => {
  return (
    <div className="2xl:flex items-center gap-10 xl:mb-24 mb:14 mt-8 last:mb-0 border border-slate-200 lg:border-0 p-8 lg:p-0">
      <img src={thumb} alt={category} className="xl:h-[335px] xl:min-w-[390px] rounded-md lg:mb-0 mb-6 object-contain w-full h-full"/>
      <div>
        <div className="text-xl pb-5 text-[#222222]">{category}</div>
        <div className="text-[27px] font-semibold mb-8">{post_title}</div>
        <p className="text-base text-base-paragraph mb-6">{desc}</p>
        <div className="flex flex-wrap mb-8 gap-6">
          {post_wgd.map((data: IconTextInterface, i: number) => {
            return <IconText key={i} icon={data.icon} text={data.text} isIcon />;
          })}
        </div>
        <Redirect title="View Details" />
      </div>
    </div>
  );
};

export default LatestPost;
