import React from "react";

interface CardProps {
  icon: string;
  category_name: string;
  color: string;
}

const NewsCategoryCard: React.FC<CardProps> = ({ icon, category_name, color }) => {
  return (
    <div className="border border-slate-200 rounded-lg xl:mx-6 mx-3 lg:px-10 px6 py-8">
      <img src={icon} alt={category_name} className="h-12 mx-auto"/>
      <div
        className={`xl:text-2xl md:text-lg font-medium mt-4 text-center ${color === "red" ? "text-red-500" : ""} ${
          color === "blue" ? "text-blue-500" : ""
        } ${color === "green" ? "text-green-600" : ""} ${
          color === "purple" ? "text-purple-400" : ""
        }`}
      >{category_name}</div>
    </div>
  );
};

export default NewsCategoryCard;