import React from "react";
import Logo from "../assets/Images/Logo.png";
import { SearchIcon } from "./Svg";

function SearchBar() {
  return (
    <div className="w-full flex items-center justify-between px-10 py-3">
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <img src={Logo} alt="Cookpal Logo" className="h-[72px] w-[150px]" />
      </div>

      {/* Search Bar beside the logo */}
      <div className="flex-1 ml-10">
        <div className="w-full max-w-[726px] h-[46px] flex items-center rounded-[20px] border border-gray-300 overflow-hidden">
          <select className="h-full px-3 py-2 font-Montserrat bg-transparent text-sm focus:outline-none appearance-none border-r rounded-full border-gray-300">
            <option>All Categories</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Dessert</option>
          </select>

          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-sm"
          />
          <div className="h-full px-3 rounded-full flex items-center justify-center bg-[#D9D9D9] transition-colors">
            <SearchIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
