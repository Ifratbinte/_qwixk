import React from "react";
import bannerData from "#/__mocks__/banner.json";
import Button from "#/components/Button/btn-primary";

const Banner = () => {
  const data = bannerData.banner;
  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
      <div className="bg-gradient-to-r from-base-green-light to-base-blue-light rounded-[2.5rem] relative mt-10">
        <div className="md:flex items-center md:gap-24 md:px-16 px-6 md:py-12 py-6">
          <div className="md:w-3/5">
            <div className="lg:text-[1.75rem] text-xl text-gray-600 font-medium lg:pb-6 pb-3 font-poppins lg:leading-relaxed">
              {data.title}
            </div>
            <a href="/apps">
              <Button text="See our apps" isTransparent={false} />
            </a>
          </div>

          <div className="relative md:w-1/5 mt-20 md:mt-0">
            <img src={data.thumb_sm} alt="thumb-sm" className="" />
            <img
              src={data.thumb_lg}
              alt="thumb-lg"
              className="absolute md:-top-24 md:-right-24 -top-14 -right-3 w-[200px]"
            />
          </div>

          <div className="md:w-1/5 flex md:justify-end justify-center mt-10 md:mt-0">
            <img src={data.gfx} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
