import React from "react";

export interface BadgeProps {
  type: string;
}

const AppBadge: React.FC<BadgeProps> = ({ type }) => {
  return (
    <span
      className={`${type === "New" ? "bg-app-blue-dark" : ""} ${
        type === "Upcoming"
          ? "bg-gradient-to-r from-app-purple-light to-app-purple"
          : ""
      } ${
        type === "Top Rated" ? "bg-gradient-to-r from-red-400 to-red-800" : ""
      } py-[1px] text-[12px] text-white px-10 w-full absolute top-[20px] right-[35%] -rotate-[37deg] text-center`}
    >
      {type}
    </span>
  );
};

export default AppBadge;
