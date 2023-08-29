import React from "react";
import hero_data from "#/__mocks__/hero.json";
import Button from "#/components/Button/btn-primary";
import styles from "./hero.module.css";
import TextBlock from "#/components/common/TextBlock";

const HeroTop = () => {
  return (
    <div className="flex items-center lg:justify-between justify-center flex-col lg:flex-row lg:gap-10  gap-6">
      <div className="lg:w-1/2 w-full flex items-center pr-20">
        <div className="relative lg:text-[66px] sm:text-[36px] text-[28px] font-semibold font-poppins text-black">
          {hero_data.header_text.title}
          <span className={`${styles.border} relative`}>
            <img
              src="./images/icon/quote.png"
              alt="Quote"
              className="inline bottom-6 ml-36 w-8 md:w-14"
            />
          </span>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <TextBlock desc={hero_data.header_text.desc} isJustify no_gap isNone />
        <Button text="Get Started" isTransparent={false} />
      </div>
    </div>
  );
};

export default HeroTop;
