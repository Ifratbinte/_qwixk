import React from "react";
// import FeaturedInterface from "#/interface/post";
import IconText from "../widgets/icon-with-text";

export interface IconTextInterface {
  icon: string;
  text: string;
}
export interface FeaturedInterface {
  thumb: string;
  title: string;
  post_wgd: IconTextInterface[];
}
const FeatureDesc: React.FC<FeaturedInterface> = ({
  thumb,
  title,
  post_wgd,
}) => {
  return (
    <div className="shadow border border-slate-200">
      <img src={thumb} alt="Post thumbnail" />
      <div className="font-semibold text-2xl">{title}</div>
      <div className="flex mr-4">
        {post_wgd.map((data: IconTextInterface, i: number) => {
          return (
            <IconText key={i} icon={data.icon} text={data.text} />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureDesc;
