import TransparentTag from "#/components/Button/transparent-tag";
import Category from "#/components/View/News/Category";
import Featured from "#/components/View/News/Featured";
import LatestPost from "#/components/View/News/Latest";
import PopularPost from "#/components/View/News/Popular";
import Tags from "#/components/View/News/Tags";
import React from "react";

const Blog = () => {
  return (
    <div>
      <Featured />
      <Category />
      <div className="container section-gap mx-auto">
        <div className="flex gap-12">
          <div className="w-7/12">
            <LatestPost />
          </div>
          <div className="w-5/12">
            <Tags />
            <PopularPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
