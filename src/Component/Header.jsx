import React from "react";
import { ProfileIcon } from "./LoginSvg";
import { RegisterIcon } from "./RegisterSvg";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="container mx-auto px-6 py-2">
        <nav className="flex justify-between items-center font-Montserrat text-white">
          {/* Left Side */}
          <div className="flex space-x-11">
            <a href="#" className="hover:text-gray-400 transition-colors">
              COMMUNITY
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              BOOKS
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              RECIPE INDEX
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              POPULAR
            </a>
          </div>

          {/* Right Side */}
          <div className="flex space-x-6 items-center">
            {/* Register */}
            <div className="flex items-center gap-2 hover:text-gray-400 transition-colors cursor-pointer">
              <RegisterIcon />
              <span>REGISTER</span>
            </div>

            {/* Login */} 
            <div className="flex items-center gap-2 hover:text-gray-400 transition-colors cursor-pointer">
              <ProfileIcon />
              <span>LOGIN</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
