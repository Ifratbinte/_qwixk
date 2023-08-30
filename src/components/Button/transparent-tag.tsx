import React from "react";
interface Props {
  text: string;
}
const TransparentTag: React.FC<Props> = ({ text }) => {
  return (
    <div className="rounded border border-slate-200 text-[#1A1A1A] py-1 px-4 m-2 font-medium text-base">
      {text}
    </div>
  );
};

export default TransparentTag;
