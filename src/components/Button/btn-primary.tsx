import React from "react";

interface BtnProps {
  text: string;
  isTransparent?: boolean;
  isAuth?: boolean;
  isSquare?: boolean;
  handleOpen?: ()=> void
}

const BtnPrimary: React.FC<BtnProps> = ({
  text,
  isTransparent,
  isAuth,
  isSquare,
  handleOpen
}) => {
  return (
    <div onClick={handleOpen}
      className={`${isAuth && "hidden lg:block"} ${
        isSquare ? "rounded" : "lg:rounded-xl rounded-full"
      } h-[2.75rem] lg:h-[3.125rem] lg:w-48 w-36  bg-gradient-to-r from-base-green to-base-blue p-[3px] cursor-pointer`}
    >
      <div
        className={`flex h-full rounded-xl items-center justify-center ${
          isTransparent ? "bg-white" : ""
        }`}
      >
        <span
          className={`text-lg font-semibold font-poppins ${
            isTransparent
              ? "text-transparent bg-clip-text bg-gradient-to-b from-base-green to-base-blue"
              : "text-white"
          }`}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default BtnPrimary;
