import React from "react";

interface Props {
  subtitle: string;
}

const Subtitle: React.FC<Props> = ({ subtitle }) => {
  return <div className="font-bold xl:text-[56px] lg:text-[44px] sm:text-[36px] text-[28px]">{subtitle}</div>;
};

export default Subtitle;
