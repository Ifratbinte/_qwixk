import React from "react";

interface Props {
  title: string;
  isHeader?:boolean
}

const TitleBorder: React.FC<Props> = ({ title , isHeader}) => {
  return <div className={`${isHeader && 'mb-8'} left-border relative text-base-green text-xl`}>{title}</div>;
};

export default TitleBorder;
