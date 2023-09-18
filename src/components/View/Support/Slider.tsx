import React from "react";
import AppSlider from "react-slick";
import sliderData from "#/__mocks__/support.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Slider = () => {
  const settings = {
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    nextArrow: <FiChevronRight />,
    prevArrow: <FiChevronLeft />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container section-gap-m mx-auto">
      <div className="xl:w-1/2 w-2/3 mx-auto">
        <AppSlider {...settings}>
          {sliderData.apps.map((data: any, i: number) => {
            return (
              <Link
                href={data.path}
                className="flex flex-col justify-center items-center text-center"
              >
                <img src={data.img} alt={data.name} className="mx-auto" />
                <span>{data.name}</span>
              </Link>
            );
          })}
        </AppSlider>
      </div>
    </div>
  );
};

export default Slider;
