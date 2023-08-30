import Link from "next/link";
import React from "react";
import IconText from "../widgets/icon-with-text";
import Redirect from "../widgets/Redirect";

export interface IconTextInterface {
  text: string;
}
export interface PopularInterface {
  thumb: string;
  post_title: string;
  post_wgd: IconTextInterface[];
}

const PopularPost: React.FC<PopularInterface> = ({
  thumb,
  post_title,
  post_wgd,
}) => {
  return (
    <div className="flex items-center gap-10 mb-14 last:mb-0">
      <img src={thumb} alt="Popular post" />
      <div>
        <div className="text-[14px] font-semibold pb-4">{post_title}</div>
        <div className="flex mb-6 gap-6">
          {post_wgd.map((data: IconTextInterface, i: number) => {
            return <IconText key={i} text={data.text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
