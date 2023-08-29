import React from "react";
import BadgeThumb from "../widgets/badge-thumb";
import AppActionBtn from "#/components/Button/app-action-button";

interface Props {
  type?: string;
  logo: string;
  app_thumb: string;
  app_name: string;
  button: string;
  btn_text: string;
}

const AppCardFeat: React.FC<Props> = ({
  type,
  logo,
  app_thumb,
  app_name,
  button,
  btn_text,
}) => {
  return (
    <div
      className={`${
        type === "Coming Soon"
          ? "bg-gradient-to-br from-[#52BBC9] to-[#DA8FF4]"
          : ""
      } ${
        type === "Top Rated"
          ? "bg-gradient-to-br from-[#88B7ED] to-[#5DD695]"
          : ""
      } ${
        type === "Spotlight"
          ? "bg-gradient-to-br from-[#88E4B3] to-[#A7A2F3]"
          : ""
      } relative rounded-[2rem] m-[22px] p-10 h-[456px]`}
    >
      <BadgeThumb category={type} />
      <div className="flex justify-center items-center p-[105px]">
        <img src={logo} alt="" className=" h-14" />
      </div>
      <div className="flex justify-between items-center gap-6">
        <div className="flex items-center ">
          <img src={app_thumb} alt="App Thumb" className="w-28" />
          <div className="ml-5">
            <h6 className="text-2xl font-medium">{app_name}</h6>
            <span className="text-white text-lg">Powered by Qwixk</span>
          </div>
        </div>
        <div>
          <AppActionBtn button={button} btn_text={btn_text} />
        </div>
      </div>
    </div>
  );
};

export default AppCardFeat;
