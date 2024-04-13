import React from "react";
import Button from "./Button/Button";

function Navbar() {
  return (
    <div className="text-white flex justify-around items-center h-[100px] bg-transparent w-full font-squid sm:text-sm md:text-base lg:text-xl">
      <a
        href="https://www.hnccbits.com/"
        target="_blank"
        className=" flex w-fit justify-center items-center border-2 border-[#ec0e89] rounded-full"
      >
        <img
          src="../assets/hncc-logo.png"
          alt="Club logo"
          className="w-[70px]"
        ></img>
      </a>
      <ul className="flex">
        <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">
          Home
        </li>
        <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">
          Events
        </li>
        <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">
          Gallery
        </li>
        <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">
          Demo
        </li>
      </ul>
      <Button title={"join"} />
    </div>
  );
}

export default Navbar;
