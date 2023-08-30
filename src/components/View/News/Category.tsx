import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import category_data from "#/__mocks__/article.json";
import NewsCategoryCard from "#/components/common/NewsCategoryCard";
import AppTitle from "#/components/common/widgets/app-title";

const SliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true
};

const Category = () => {
  return (
    <div className="container section-gap mx-auto">
      <AppTitle title="Explored By category" title_style="text-[48px]" />
      <Slider {...SliderSettings}>
        {category_data.blog.category.map((data: any, i: number) => {
          return (
            <div className="-mx-6">
              <NewsCategoryCard
                key={i}
                icon={data.icon}
                category_name={data.category_name}
                color={data.color}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Category;
