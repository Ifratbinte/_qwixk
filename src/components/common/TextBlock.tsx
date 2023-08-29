import React from "react";

interface TextInterface {
  title?: string;
  desc?: string;
  isCenter?: boolean
  isJustify?: boolean
  isHeader?: boolean
  title_style?: string
  no_gap?: boolean
  isNone?:boolean
}

const TextBlock: React.FC<TextInterface> = ({ title, desc, isCenter, isJustify, isHeader, title_style= "text-5xl", no_gap, isNone }) => {
  return (
    <div className={`${isCenter && "text-center"} ${isHeader ? "lg:pb-[70px] pb-[50px]" : "lg:pb-[50px] pb-[30px]"} ${no_gap && "pb-0"}`}>
      {!isNone && <h1 className={`lg:${title_style} text-3xl font-semibold font-poppins text-base-black pb-8 !leading-tight`}>{title}</h1>}
      <p className={`${isJustify ? "text-justify" : '' } ${title_style} md:text-xl font-medium text-base font-poppins text-base-paragraph md:tracking-wider tracking-wide md:!leading-8`}>{desc}</p>
    </div>
  );
};

export default TextBlock;
