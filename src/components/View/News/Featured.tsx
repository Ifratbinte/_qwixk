import FeatureDesc from "#/components/common/post/FeatureDesc";
import AppTitle from "#/components/common/widgets/app-title";
import React from "react";
import feature_data from "#/__mocks__/article.json";
import FeaturePost from "#/components/common/post/FeaturePost";

const Featured = () => {
  const feature = feature_data.blog.featured_desc;
  const featured_post = feature_data.blog.featured_post;

  return (
    <div className="container mx-auto section-gap-m">
      <AppTitle title="Featured Posts" title_style="xl:text-[48px] md:text-[32px] text-3xl text-center xl:text-left" />
      <div className="xl:flex xl:justify-between gap-10">
        <div className="xl:w-7/12 lg:w-3/4 w-11/12 mx-auto mb-10 xl:mb-0">
          <div className="shadow-regular">
            <FeatureDesc
              thumb={feature.thumb}
              title={feature.title}
              post_wgd={feature.post_wgd}
            />
          </div>
        </div>
        <div className="xl:w-5/12 lg:w-3/4 w-11/12 mx-auto max-h-[800px] overflow-y-scroll">
          <div className="md:px-3 px-1">
            {featured_post.map((post: any, i: number) => {
              return (
                <FeaturePost
                  key={i}
                  category={post.cate}
                  title={post.title}
                  read_time={post.read_time}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
