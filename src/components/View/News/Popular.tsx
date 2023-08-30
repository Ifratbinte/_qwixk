import AppTitle from "#/components/common/widgets/app-title";
import React from "react";
import post_data from "#/__mocks__/article.json";
import PopularPost from "#/components/common/post/PopularPost";

const Popular = () => {
  const popular = post_data.blog.popular_post;
  return (
    <>
      <AppTitle title="popular Post" title_style="text-[20px]" />
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
