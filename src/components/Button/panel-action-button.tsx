import React from "react";

interface Props {
  title: string;
  icon: any;
  isBg?: boolean;
  isTransparent?: boolean;
}

const PanelActionBtn: React.FC<Props> = ({
  title,
  icon,
  isBg,
  isTransparent,
}) => {
  return (
    <button
      className={`${
        isBg ? "bg-[#368CF0] text-white" : "bg-white text-[#368CF0] border border-[#368CF0]"
      } flex justify-center items-center rounded-lg py-2 w-[210px] gap-2`}
    >
      <span>{icon}</span>
      <span className="text-lg font-medium">{title}</span>
    </button>
  );
};

export default PanelActionBtn;
