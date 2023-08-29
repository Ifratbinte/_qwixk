import React from "react";

const footerBottom = () => {
  return (
    <div className="bg-white border border-t">
      <div className="text-gray-400 font-semibold text-md font-poppins flex justify-center py-5 gap-2">
        <span>2022 - {new Date().getFullYear()}</span>{" "}
        <a href="/" className="text-green-400">Qwixk</a>
      </div>
    </div>
  );
};

export default footerBottom;
