import React from "react";
import Category from "#/components/View/News/Category";
import Featured from "#/components/View/News/Featured";
import LatestPost from "#/components/View/News/Latest";
import Tags from "#/components/View/News/Tags";
import PopularPost from "#/components/View/News/Popular";
import AppTitle from "#/components/common/widgets/app-title";
import Search from "#/components/common/form/Search";
import Subscription from "#/components/common/Subscription";

const Blog = () => {
  return (
    <div>
      <Featured />
      <Category />
      <div className="container section-gap-m mx-auto">
        <div className="flex items-center">
          <div className="w-7/12">
            <AppTitle title="Latest Post" title_style="text-[48px]" />
          </div>
          <div className="w-5/12">
            <Search placeholder="Type to Search"/>
          </div>
        </div>
        <div className="flex gap-x-16">
          <div className="w-7/12">
            <LatestPost />
          </div>
          <div className="w-5/12">
            <Tags />
            <PopularPost />
            <Subscription/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
