import React from "react";

export interface BadgeProps {
  category: any;
}

const BadgeThumb: React.FC<BadgeProps> = ({ category }) => {
  return (
    <span
      className={`${
        category === "Top Rated"
          ? "bg-gradient-to-r from-[#00BF58] to-[#808FE8]"
          : ""
      } ${
        category === "Coming Soon"
          ? "bg-gradient-to-r from-app-purple-light to-app-purple"
          : ""
      } ${
        category === "Spotlight"
          ? "bg-gradient-to-r from-[#38B3C3] to-[#808FE8]"
          : ""
      } text-xl py-5 px-16 text-white absolute left-0 top-0 rounded-tl-[2rem] text-center`}
    >
      {category}
    </span>
  );
};

export default BadgeThumb;
