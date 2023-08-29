import Link from "next/link";
import React from "react";
import Badge from "#/components/common/widgets/app-badge";
import StoreList from "#/components/common/widgets/store-list";
interface CardFeatProps {
  title: string;
  appFeatured: string;
  icons?: [];
  type: string;
  isBgWhite?: boolean;
}

const AppCardFeat: React.FC<CardFeatProps> = ({
  title,
  appFeatured,
  type,
  isBgWhite,
}) => {
  return (
    <Link
      href="#"
      className={`${
        isBgWhite ? "bg-white" : ""
      } relative overflow-hidden w-[250px] h-[230px] border border-slate-50 shadow-md rounded-3xl mr-8`}
    >
      <Badge type={type} />
      <div>
        <img
          src={appFeatured}
          alt={title}
          className="w-[100px] h-[100px] mx-auto mt-12 mb-1"
        />
      </div>
      <h5 className="text-base font-medium text-base-black text-center py-1">
        {title}
      </h5>
      <ul className="flex justify-center">
        {/* <StoreList icon={}/> */}
        <li className="mx-1">
          <a href="#">
            <img src="./images/icon/apps/store.png" alt="" />
          </a>
        </li>
        <li className="mx-1">
          <a href="#">
            <img src="./images/icon/apps/android.png" alt="" />
          </a>
        </li>
        <li className="mx-1">
          <a href="#">
            <img src="./images/icon/apps/play.png" alt="" />
          </a>
        </li>
      </ul>
    </Link>
  );
};

export default AppCardFeat;
