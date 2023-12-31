import React from "react";

interface Props {
  title: string;
  title_style?: string;
}

const AppTitle: React.FC<Props> = ({ title, title_style = "text-2xl" }) => {
  return <h4 className={` ${title_style} font-semibold xl:pb-12 pb-6`}>{title}</h4>;
};

export default AppTitle;
