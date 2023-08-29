import React from "react";

interface InputProps {
  placeholder?: string;
  btn_text?: string;
  type?: string;
  isCta?: boolean;
}

const InputField: React.FC<InputProps> = ({
  placeholder,
  btn_text,
  type,
  isCta,
}) => {
  return (
    <>
      <form>
        <div className="relative">
          <input
            type={type}
            className={`${
              isCta ? "rounded-b-full rounded-tl-full text-gray-100 border border-gray-100 placeholder-gray-100" : "rounded text-base-paragraph border-slate-800 placeholder-base-paragraph"
            } block w-full py-[17px] pr-4 pl-10 font-poppins text-base bg-transparent focus:ring-blue-500 focus:border-blue-500`}
            placeholder={placeholder}
            required
          />
          <button
            type="submit"
            className="text-base-green absolute right-1.5 bottom-1.5 bg-white focus:outline-none font-regular rounded-b-full rounded-tl-full text-base font-poppins md:px-14 px-4 py-3"
          >
            {btn_text}
          </button>
        </div>
      </form>
    </>
  );
};

export default InputField;
