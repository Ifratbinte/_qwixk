import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BiSearchAlt className="h-6 w-6 ml-6 text-gray-400" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full py-5 px-7 pl-20 text-base text-gray-900 border border-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-500 focus-visible:border-base-green-medium"
          placeholder="Search Support"
          required
        />
      </div>
    </form>
  );
};

export default Search;
