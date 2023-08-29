import React from "react";
import articleData from "#/__mocks__/article.json";
import CardBlock from "#/components/common/CardBlock";
import TextBlock from "#/components/common/TextBlock";

const Article = () => {
  const article = articleData.articles;
  return (
    <div className="lg:section-gap sm:section-gap-m section-gap-sm">
      <div className="bg-gradient-to-b from-green-100 to-blue-50 ">
        <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
          <TextBlock title={articleData.title} isCenter />
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
            {article.map((data: any , i:number) => {
              return (
                <div className="mb-8 md:mb-0" key={i}>
                  <CardBlock
                    key={data.id}
                    image={data.image}
                    icon={data.icon}
                    desc={data.desc}
                    date={data.date}
                    category={data.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
