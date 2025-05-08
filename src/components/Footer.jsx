import React from "react";
import FooterImage from "../assets/Images/FooterImage.png";
import Logo from "../assets/Images/Logo.png";

function Footer() {
  return (
    <footer
      className='min-h-64 w-full bg-cover bg-center'
      style={{
        backgroundImage: `url(${FooterImage})`,
        color:'black'
      }}
    >
      <div className="w-full flex flex-col justify-center h-[243px] m-12">
          <img
            src={Logo}
            alt="Cookpal Logo"
            className="h-10 object-contain mx-4 w-fit"
          />
         <p className="h-11 ml-2 mx-4  text-white">
         &nbsp;&nbsp;All Rights Reserved
          </p>
        
      </div>
    </footer>
  );
}

export default Footer;
