import React from "react";
import TextBlock from "#/components/common/TextBlock";
import innovation_data from "#/__mocks__/innovation.json";
import Button from "#/components/Button/btn-primary";

const Innovation = () => {
  const innovation = innovation_data.innovation;
  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
      <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-24">
        <div className="lg:w-1/2 w-full relative">
          <img
            src="./images/thumb/innovation/lg.png"
            alt="Innovation"
            className="mb-6 lg:mb-0 mx-auto lg:mx-0"
          />
          <img
            src="./images/thumb/innovation/sm.png"
            alt="Innovation"
            className="sm:block hidden absolute bottom-[90px] right-[50px]"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <TextBlock
            title={innovation.title}
            desc={innovation.desc}
            isJustify
            isHeader
            title_style="pr-12"
          />
          <a href="/about">
            <Button text="Learn More" isTransparent={false} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
