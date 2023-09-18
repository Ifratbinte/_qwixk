import React from "react";
import appsData from "#/__mocks__/apps.json";
import AppCard from "#/components/common/Apps/AppThumb";
import AppTitle from "#/components/common/widgets/app-title";

const Entertainment = () => {
  const app_data = appsData.apps_content.entertainment;
  console.log("app_data", app_data);

  return (
    <div className="container mx-auto section-gap-m !px-6 sm:px-0">
      <AppTitle title="Entertainment"/>
      <div className="flex items-center justify-start flex-wrap">
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

export default Entertainment;
