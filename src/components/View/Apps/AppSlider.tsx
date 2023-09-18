import React from "react";
import Slider from "react-slick";
import AppCard from "#/components/common/Apps/AppCardFeat";
import cardData from "#/__mocks__/apps.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "470px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          centerPadding: "470px",
          centerMode: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="container section-gap mx-auto">
      <Slider {...settings}>
        {cardData.appCard.map((card_data: any, i: number) => {
          return (
            <AppCard
              type={card_data.type}
              logo={card_data.logo}
              app_thumb={card_data.thumb}
              app_name={card_data.name}
              button={card_data.btn_text}
              btn_text={card_data.btn_text}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
