import { type } from "os";
import React from "react";

interface ButtonProps {
  button: string;
  btn_text: string;
}

const AppActionBtn: React.FC<ButtonProps> = ({ button, btn_text }) => {
  return (
    <button
      className={`${btn_text === "Pre-register" ? "bg-[#A157F6]" : ""} ${
        btn_text === "Install Now" ? "bg-[#8481FE]" : ""
      } ${
        btn_text === "Download" ? "bg-[#38B3C3]" : ""
      } text-white px-6 py-5 rounded text-lg`}
    >
      {button}
    </button>
  );
};

export default AppActionBtn;
