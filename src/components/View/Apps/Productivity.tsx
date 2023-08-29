import React from "react";
import appsData from "#/__mocks__/apps.json";
import AppCard from "#/components/common/Apps/AppThumb";
import AppTitle from "#/components/common/widgets/app-title";

const Productivity = () => {
  const app_data = appsData.apps_content.productivity;
  console.log("app_data", app_data);
  
  return (
    <div className="container mx-auto section-gap-m">
      <AppTitle title="Productivity"/>
      <div className="flex items-center justify-start">
        {app_data.map((data: any, i: number) => {
          return (
            <AppCard
              type={data.type}
              appFeatured={data.featured}
              title={data.title}
              // icons={appsData.apps_content.icons}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Productivity;
