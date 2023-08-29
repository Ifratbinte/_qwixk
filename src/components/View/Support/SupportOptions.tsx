import React from "react";
import supportData from "#/__mocks__/support.json";
import SupportCard from "#/components/common/widgets/light-bg-card";

const SupportOptions = () => {
  return (
    <div className="container mx-auto section-gap-m">
      <div className="grid grid-cols-3 gap-16">
        {supportData.options.map((options: any, i: number) => {
          return (
            <SupportCard
              key={i}
              icon={options.icon}
              option_title={options.title}
              type={options.type}
              isLgIcon
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default SupportOptions;
