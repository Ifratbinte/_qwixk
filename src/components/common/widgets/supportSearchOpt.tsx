import React from "react";

interface Props {
  icon: string;
  title: string;
  desc: string;
  isBtn?: boolean;
  btn_text?: string;
  isLink?: boolean;
  link_text?: string;
  link_desc?: string;
  isFlex?: boolean;
  isCenter?: boolean;
  lgPadding?: boolean;
}

const SupportSearchOpt: React.FC<Props> = ({
  icon,
  title,
  desc,
  isBtn,
  btn_text,
  isLink,
  link_text,
  link_desc,
  isFlex,
  isCenter,
  lgPadding,
}) => {
  return (
    <div
      className={`flex items-center bg-[#f3fbf8] px-12 py-16  ${
        isFlex ? "lg:flex-row flex-col lg:px-28 px-4" : "flex-col"
      }`}
    >
      <img src={icon} alt={title} className={`${isFlex ? "w-64" : "w-24"}`} />
      <div className={`${isCenter ? "text-center" : "text-left pl-20 pr-10"}`}>
        <div className="text-4xl font-semibold pt-3 pb-2">{title}</div>
        <p
          className={`text-xl mb-8 mt-4 leading-[1.75] tracking-wider ${
            lgPadding && "xl:px-32 px-4"
          }`}
        >
          {desc}
        </p>
        {isBtn && (
          <button className="bg-green-500 mx-auto text-white text-xl font-medium rounded-xl px-12 py-2">
            {btn_text}
          </button>
        )}
        {isLink && (
          <p className=" text-xl leading-[1.75] tracking-wider">
            <span className="text-green-500 underline font-semibold mr-2">
              {link_text}
            </span>
            {link_desc}
          </p>
        )}
      </div>
    </div>
  );
};

export default SupportSearchOpt;
