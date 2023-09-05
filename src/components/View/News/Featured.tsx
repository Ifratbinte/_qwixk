import FeatureDesc from "#/components/common/post/FeatureDesc";
import AppTitle from "#/components/common/widgets/app-title";
import React from "react";
import feature_data from "#/__mocks__/article.json";
import FeaturePost from "#/components/common/post/FeaturePost";

const Featured = () => {
  const feature = feature_data.blog;

  return (
    <div className="container mx-auto section-gap-m">
      <AppTitle title="Featured Posts" title_style="text-[48px]" />
      <div className="flex justify-between gap-10">
        <div className="w-7/12">
          <div className="shadow-regular">
            <FeatureDesc
              thumb={feature.featured_desc.thumb}
              title={feature.featured_desc.title}
              post_wgd={feature.featured_desc.post_wgd}
            />
          </div>
        </div>
        <div className="w-5/12 max-h-[800px] overflow-y-scroll">
          <div className="px-3">
            {/* {feature.featured_post.map((post: any, i: number) => {
              return (
                <FeaturePost
                  key={i}
                  category={post.cate}
                  title={post.title}
                  read_time={post.read_time}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
