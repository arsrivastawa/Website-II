import React from "react";

function Navbar() {
  return (
    <div className="text-white flex justify-around items-center h-[100px] bg-transparent  w-full font-squid sm:text-sm md:text-base lg:text-xl">
      <div className=" flex w-fit justify-center items-center border-2 border-[#ec0e89] rounded-full"><img src="../assets/hncc-logo.png"alt="Club logo" className="w-[70px] "></img></div>
      <ul className="flex ">
        <li className="lg:px-8 md:px-6 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89] ">Home</li>
        <li className="lg:px-8 md:px-6 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">Events</li>
        <li className="lg:px-8 md:px-6 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">Gallery</li>
        <li className="lg:px-8 md:px-6 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">Demo</li>
      </ul>
      <div className="btn relative w-fit hover:text-[#ec0e89] hover:cursor-pointer ">
        <img src="../assets/buttonFinal.png" className="w-[110px] block"></img>
        <div className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ">LogIn</div>
      </div>
    </div>
  );
}

export default Navbar;
