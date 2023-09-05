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
    <div className="flex items-center gap-10 mb-14 mt-8 last:mb-0">
      <img src={thumb} alt={category} className="h-[335px] min-w-[390px] rounded-md"/>
      <div>
        <div className="text-xl pb-5 text-[#222222]">{category}</div>
        <div className="text-[27px] font-semibold pb-4">{post_title}</div>
        <p className="text-base text-base-paragraph mb-6">{desc}</p>
        <div className="flex mb-6 gap-6">
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
