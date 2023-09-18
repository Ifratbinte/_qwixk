import React from "react";

interface Props {
  icon: string;
  type: string;
  option_title: string;
}

const LightBgCard: React.FC<Props> = ({ icon, type, option_title }) => {
  return (
    <div className="rounded-xl bg-[#f3fbf8] xl:py-24 py-16 xl:p-16 px-2">
      <img src={icon} alt={type} className="lg:w-32 w-16 mx-auto mb-6" />

      {option_title && (
        <span
          className={`pt-6 text-center lg:text-xl text-lg font-medium ${
            type === "password" ? "text-blue-500" : ""
          } ${type === "issue" ? "text-red-500" : ""} ${
            type === "billing" ? "text-green-500" : ""
          } `}
        >
          {option_title}
        </span>
      )}
    </div>
  );
};

export default LightBgCard;
