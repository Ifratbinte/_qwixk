import React from "react";

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  type: string;
}

const Input: React.FC<Props> = ({
  id,
  label,
  placeholder,
  type,
  value,
}) => {
  return (
    <form className="w-full my-5">
      <label htmlFor={id} className="text-base">{label}</label>
      <input
        className="text-[#646464] peer h-full w-full rounded-md bg-gray-100 px-3 py-3 text-base text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-base-blue focus:outline-0 mt-2"
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </form>
  );
};

export default Input;
