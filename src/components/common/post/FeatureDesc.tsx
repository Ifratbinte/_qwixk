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
        {post_wgd.map((data: any, i: number) => {
          return (
            <div className="flex items-center gap-3">
              <img src={data.icon} alt="Icon" />
              <div className="text-xl">{data.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureDesc;
