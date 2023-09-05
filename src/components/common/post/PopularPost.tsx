import Link from "next/link";
import React from "react";
import IconText from "../widgets/icon-with-text";
import Redirect from "../widgets/redirect";
import { FaLongArrowAltRight } from "react-icons/fa";

export interface IconTextInterface {
  text: string;
}
export interface PopularInterface {
  thumb: string;
  post_title: string;
  post_wgd: IconTextInterface[];
  isIconWithText?: boolean;
}

const PopularPost: React.FC<PopularInterface> = ({
  thumb,
  post_title,
  post_wgd,
  isIconWithText,
}) => {
  return (
    <div className="flex items-center gap-10 mb-14 last:mb-0">
      <img src={thumb} alt="Popular post" />
      <div>
        <div className="text-lg font-semibold pb-4">{post_title}</div>
        <div
          className={`${
            isIconWithText ? "mb-6 gap-6" : "mb-0"
          } flex items-center relative`}
        >
          {post_wgd.map((data: IconTextInterface, i: number) => {
            return <IconText key={i} text={data.text} />;
          })}
          <div className="absolute right-0">
            <Link href="/">
              <FaLongArrowAltRight className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
