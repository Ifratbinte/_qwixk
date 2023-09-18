import React from "react";
import supportData from "#/__mocks__/support.json";
import SupportCard from "#/components/common/widgets/light-bg-card";

const SupportOptions = () => {
  return (
    <div className="container mx-auto section-gap-m">
      <div className="md:flex mx-auto xl:gap-16 md:gap-5">
        {supportData.options.map((options: any, i: number) => {
          return (
            <div className="xl:w-1/3 mb-8 w-2/3 mx-auto text-center">
              <SupportCard
                key={i}
                icon={options.icon}
                option_title={options.title}
                type={options.type}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportOptions;
