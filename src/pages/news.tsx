import Category from "#/components/View/News/Category";
import Featured from "#/components/View/News/Featured";
import React from "react";

const Blog = () => {
  return (
    <div>
      <Featured />
      <Category />
      <div className="container section-gap mx-auto">
        <div className="flex gap-10">
          <div className="w-7/12"></div>
          <div className="w-5/12"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
