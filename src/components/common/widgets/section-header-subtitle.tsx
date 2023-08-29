import React from "react";

interface Props {
  subtitle: string;
}

const Subtitle: React.FC<Props> = ({ subtitle }) => {
  return <div className="font-bold text-[56px]">{subtitle}</div>;
};

export default Subtitle;
