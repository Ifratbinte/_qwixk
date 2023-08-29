import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface FeatureInterface {
  category: string;
  title: string;
  read_time: string;
}

const FeaturePost: React.FC<FeatureInterface> = ({
  category,
  title,
  read_time,
}) => {
  return (
    <div className="px-3">
      <span className="text-xl pb-3"> {category}</span>
      <div className="text-2xl font-semibold pb-4">{title}</div>
      <div className="flex items-center gap-6">
        <span>{read_time}</span>
        <Link href="/">
          View Details <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default FeaturePost;
