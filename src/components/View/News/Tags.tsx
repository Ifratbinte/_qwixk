import React from "react";
import tagContent from "#/__mocks__/article.json";
import TransparentTag from "#/components/Button/transparent-tag";
import AppTitle from "#/components/common/widgets/app-title";

const Tags = () => {
  return (
    <>
      <AppTitle title="Tags" title_style="text-[20px] pb-3 mt-8" />
      <div className="flex flex-wrap lg:w-3/4 w-full border-t border-slate-200 pt-2">
        {tagContent.blog.tags.map((data: any, i: number) => (
          <TransparentTag text={data.tag} />
        ))}
      </div>
    </>
  );
};

export default Tags;
