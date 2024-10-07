import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[96px] py-[38px] absolute w-[1440px] h-[152px] bg-white shadow-[4px_0px_10px_rgba(47,122,249,0.1)]">
      {/* Logo */}
      <div className="absolute w-[158px] h-[76px] left-[96px] top-[38px] bg-[url('./Logo.jpg')]">
        {/* Logo image will be applied as background */}
      </div>

      {/* Menu */}
      <div className="flex justify-center items-center gap-[40px]">
        {/* Home */}
        <div className="flex flex-row items-start gap-2 w-[37px] h-[68px] bg-[#FFB400] rounded-[5px] ">
        <div className="flex flex-row justify-center items-center p-[10px_14px] w-[68px] h-[37px] rounded-[10px]">
            <span className="w-[40px] h-[17px] font-inter font-medium text-[14px] leading-[17px] text-black">
            Home
            </span>
        </div>
        </div>


        {/* Skills */}
        <div className="flex justify-center items-center p-[10px_0px] w-[35px] h-[37px] rounded-[10px]">
          <span className="text-[14px] font-medium text-black">Skills</span>
        </div>

        {/* Services */}
        <div className="flex justify-center items-center">
          <span className="text-[14px] font-medium text-black">Services</span>
        </div>

        {/* Projects */}
        <div className="flex justify-center items-center">
          <span className="text-[14px] font-medium text-black">Projects</span>
        </div>

        {/* Recommendations */}
        <div className="flex justify-center items-center">
          <span className="text-[14px] font-medium text-black">
            Recommendations
          </span>
        </div>

        {/* Contact */}
        <div className="flex justify-center items-center">
          <span className="text-[14px] font-medium text-black">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
