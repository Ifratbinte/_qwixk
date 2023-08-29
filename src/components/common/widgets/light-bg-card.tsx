import React from "react";

interface Props {
  icon: string;
  isLgIcon?: boolean;
  type?: string;
  option_title?: string;
  title?: string;
  description?: string;
  btn_text?: string;
  isButton?: boolean;
  isCenter?: boolean;
  lgPadding?: boolean;
  isFlex?: boolean;
  link_span?: string;
  link_desc?: string;
}

const LightBgCard: React.FC<Props> = ({
  icon,
  type,
  option_title,
  title,
  description,
  btn_text,
  isButton,
  isLgIcon,
  isCenter,
  lgPadding,
  isFlex,
  link_span,
  link_desc,
}) => {
  return (
    <div
      className={`${lgPadding ? "px-44" : "px-12"} ${
        isFlex ? "flex-row items-center px-24" : "flex-col"
      } rounded-xl bg-[#f3fbf8] flex justify-center items-center py-16`}
    >
      <img src={icon} alt={type} className={`${isLgIcon ? "w-32" : ""}`} />
      <div className={`${isCenter ? "text-center" : ""}`}>
        {option_title && (
          <span
            className={`${type === "password" ? "text-blue-500" : ""} ${
              type === "issue" ? "text-red-500" : ""
            } ${
              type === "billing" ? "text-green-500" : ""
            } pt-6 text-center text-xl font-medium`}
          >
            {option_title}
          </span>
        )}
        <span className="text-4xl font-semibold py-3">{title}</span>
        <p className="text-[21px] mb-8 mt-4 leading-[1.75] tracking-wider">
          {description}
        </p>
        {link_span && (
          <p className="mt-10 text-[21px] leading-[1.75] tracking-wider">
            <span className="text-green-500 underline font-semibold">{link_span}</span>{" "}
            {link_desc}
          </p>
        )}
        {isButton && (
          <button className="bg-green-500 text-white text-xl font-medium rounded-xl px-8 py-2">
            {btn_text}
          </button>
        )}
      </div>
    </div>
  );
};

export default LightBgCard;
