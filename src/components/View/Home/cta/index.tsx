import TextBlock from "#/components/common/TextBlock";
import React from "react";
import ctaData from "#/__mocks__/cta.json";
import InputField from "#/components/common/form/InputField";

const CTA = () => {
  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
      <div className="bg-gradient-to-r from-base-green-medium to-base-blue-light rounded-b-[3rem] rounded-l-[3rem]">
        <div className="lg:flex justify-between items-center lg:gap-12 gap-6 lg:px-32 px-4 py-8 lg:py-16 text-white">
          <div className="lg:w-1/2">
            <div className="py-4">
              <h1 className="md:text-6xl text-4xl font-semibold font-poppins text-white pb-8">
                {ctaData.title}
              </h1>
              <p className="md:text-lg text-base font-poppins text-slate-50 md:tracking-wider tracking-wide">
                {ctaData.subtitle}
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <InputField
              placeholder="Enter your email here..."
              btn_text="Get Started"
              isCta
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
