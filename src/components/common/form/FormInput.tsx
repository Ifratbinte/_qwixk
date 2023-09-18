import React from "react";

interface Props {
  name: string;
  placeholder?: string;
  value?: string
  type: string;
  icon?: any;
}

const FormInput: React.FC<Props> = ({ name, placeholder, type, icon, value }) => {
  return (
    <div className="relative h-14 w-full">
      <div className="absolute top-5 left-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
        {icon}
      </div>
      <input
        className="text-base-paragraph peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-base-blue focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder={placeholder}
        type={type}
        value={value}
      />

      <label className="text-base-paragraph before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[13px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-base-border-base-blue peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-base-blue peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-base-blue ">
        {name}
      </label>
    </div>
  );
};

export default FormInput;
import { Input } from "@material-tailwind/react";

export function InputIcon() {
  return (
    <div className="w-72">
      <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
    </div>
  );
}
