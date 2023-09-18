import React from "react";

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
}

const Textarea: React.FC<Props> = ({ id, label, placeholder, value }) => {
  return (
    <form className="w-full">
      <label htmlFor={id} className="text-base">{label}</label>
      <textarea
        className="text-[#646464] peer min-h-[150px] w-full rounded-md bg-gray-100 px-3 py-3 text-base text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-base-blue focus:outline-0 mt-2"
        placeholder={placeholder}
        value={value}
      />
    </form>
  );
};

export default Textarea;
