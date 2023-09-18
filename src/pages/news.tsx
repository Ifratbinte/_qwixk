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
        <div className="sm:flex items-center">
          <div className="sm:w-7/12 w-full">
            <AppTitle
              title="Latest Posts"
              title_style="xl:text-[48px] md:text-[32px] text-3xl"
            />
          </div>
          <div className="sm:w-5/12 w-full mx-4 sm:mx-0">
            <Search placeholder="Type to Search" />
          </div>
        </div>
        <div className="lg:flex 2xl:gap-x-16 gap-x-20">
          <div className="lg:w-7/12 w-5/6 mx-auto">
            <LatestPost />
          </div>
          <div className="lg:w-5/12 w-5/6 mx-auto">
            <Tags />
            <PopularPost />
            <Subscription />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
