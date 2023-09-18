import AppTitle from "#/components/common/widgets/app-title";
import React from "react";
import post_data from "#/__mocks__/article.json";
import PopularPost from "#/components/common/post/PopularPost";

const Popular = () => {
  const popular = post_data.blog.popular_post;
  return (
    <>
      {/* <AppTitle title="Popular Post" title_style="text-xl text-center xl:text-left mt-12 pb-8" /> */}
      <div className="text-xl font-semibold mt-12 mb-8 text-center xl:text-left">Popular Post</div>
      {popular.map((post_data: any, i: number) => {
        return (
          <PopularPost
            key={i}
            thumb={post_data.thumb}
            post_title={post_data.post_title}
            post_wgd={post_data.post_wgd}
          />
        );
      })}
    </>
  );
};

export default Popular;
