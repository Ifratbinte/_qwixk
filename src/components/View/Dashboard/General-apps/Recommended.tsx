import React from "react";
import appsData from "#/__mocks__/apps.json";
import AppCard from "#/components/common/Apps/AppThumb";
import AppTitle from "#/components/common/widgets/app-title";

const Recommended = () => {
  const app_data = appsData.apps_content.recommended;
  console.log("app_data", app_data);

  return (
    <div className="mx-auto section-gap-m !px-6 sm:px-0">
      <AppTitle title="Recommended Apps"/>
      <div className="flex items-center justify-start flex-wrap">
        {app_data.map((data: any, i: number) => {
          return (
            <AppCard
            key={i}
              type={data.type}
              appFeatured={data.featured}
              title={data.title}
              isBgWhite
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
