import React from 'react';
import FrontImage from "../assets/Images/FrontImage.png";

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center bg-gray-100">
      <div 
        className="relative w-[1538px] h-[435px] bg-cover bg-center bg-no-repeat flex items-center px-10"
        style={{
          backgroundImage: `url(${FrontImage})`
        }}
      >
        <p className="text-4xl font-Montserrat text-white">
          Food Diary
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
