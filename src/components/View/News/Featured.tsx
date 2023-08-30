import FeatureDesc from "#/components/common/post/FeatureDesc";
import AppTitle from "#/components/common/widgets/app-title";
import React from "react";
import feature_data from "#/__mocks__/article.json";
import FeaturePost from "#/components/common/post/FeaturePost";

const Featured = () => {
  const feature_desc = feature_data.blog.featured_desc;
  const feature_posts = feature_data.blog.features;
  console.log({feature_posts});
  
  return (
    <div className="container mx-auto section-gap-m">
      <AppTitle title="Featured Posts" title_style="text-[48px]" />
      <div className="flex justify-between gap-10">
        <div className="w-7/12">
          <div className="shadow border border-slate-200">
            <FeatureDesc
              thumb={feature_desc.thumb}
              title={feature_desc.title}
              post_wgd={feature_desc.post_wgd}
            />
          </div>
        </div>
        <div className="w-5/12">
          <div className="">
            {/* <FeaturePost category={feature_posts.category}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
