import React from "react";
import TitleBorder from "../common/widgets/title-with-left-border";
import Subtitle from "../common/widgets/section-header-subtitle";

interface Props {
  title: string;
  subtitle: string;
  isThumb?: boolean;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, isThumb }) => {
  return (
    <div className="container mx-auto section-gap-sm">
      <div className="text-center w-5/6 mx-auto py-6">
        <TitleBorder title={title} isHeader />
        <Subtitle subtitle={subtitle} />
      </div>
      {isThumb && (
        <div className="mt-12">
          <img src="./images/banner-2.png" alt="" className="mx-auto"/>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
