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
      <div className="sm:p-10 p-6">
        <div className="font-semibold xl:text-[27px] text-xl pb-8">{title}</div>
        <div className="flex flex-wrap sm:gap-10 gap-4 mb-6">
          {post_wgd.map((data: any, i: number) => {
            return (
              <div className="flex items-center gap-3">
                <img src={data.icon} alt="Icon" />
                <div className="xl:text-xl sm:text-base">{data.text}</div>
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
