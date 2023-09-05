import React from "react";
import Redirect from "../widgets/redirect";

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
    <div className="">
      <img src={thumb} alt="Post thumbnail" className="w-full" />
      <div className="p-10">
        <div className="font-semibold text-[27px] pb-8">{title}</div>
        <div className="flex gap-10 mb-6">
          {post_wgd.map((data: any, i: number) => {
            return (
              <div className="flex items-center gap-3">
                <img src={data.icon} alt="Icon" />
                <div className="text-xl">{data.text}</div>
              </div>
            );
          })}
        </div>
        <Redirect title="View Details" />
      </div>
    </div>
  );
};

export default FeatureDesc;
