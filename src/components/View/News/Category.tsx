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
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Category = () => {
  return (
    <div className="container section-gap-m mx-auto">
      <AppTitle
        title="Explored By category"
        title_style="xl:text-[48px] md:text-[32px] text-3xl text-center xl:text-left"
      />
      <Slider {...SliderSettings}>
        {category_data.blog.category.map((data: any, i: number) => {
          return (
            <div className="xl:-mx-6 -mx-3">
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
