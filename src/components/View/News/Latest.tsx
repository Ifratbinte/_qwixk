import LatestPost from "#/components/common/post/LatestPost";
import AppTitle from "#/components/common/widgets/app-title";
import React from "react";
import post_data from "#/__mocks__/article.json";

const Latest = () => {
  const latestPostData = post_data.blog.latest_post;
  return (
    <>
      <AppTitle title="Latest Post" title_style="text-[48px]" />
      {latestPostData.map((post_data: any, i: number) => {
        return (
          <LatestPost
            key={i}
            thumb={post_data.thumb}
            category={post_data.category}
            post_title={post_data.post_title}
            desc={post_data.post_desc}
            post_wgd={post_data.post_wgd}
          />
        );
      })}
    </>
  );
};

export default Latest;
