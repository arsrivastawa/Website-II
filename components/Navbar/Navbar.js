"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Navbar.css";
import SideBar from "./Sidebar";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "overlay");
    document.body.appendChild(div);
    return () => div.remove();
  }, []);
  return (
    <div id="navbar" className="px-8 desktop:px-12 lg:px-16 xl:px-20 2xl:px-24 text-white flex justify-between items-center h-[100px] bg-transparent w-full font-squid sm:text-sm md:text-base lg:text-xl">
      <a
        href="https://www.hnccbits.com/"
        target="_blank"
        className=" flex w-fit justify-center items-center border-2 border-[#ec0e89] rounded-full"
      >
        <img src="../assets/hncc-logo.png" alt="HnCC_logo" className="w-[50px] sm:w-[70px]" />
      </a>
      <ul className="navlinks-container desktop:hidden">
        <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">
          Home
        </li>
        <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">
          Events
        </li>
        <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer hover:text-[#ec0e89]">
          Gallery
        </li>
      </ul>
      <div className="navbar-join-btn">
        <Button title={"join"} />
      </div>
      <div className="hamburger-icon-container flex justify-center items-center relative group w-[80px] xs:w-[100px] sm:w-[125px] md:w-[150px] min-h-[40px]">
        <div className="w-full h-full flex justify-center items-center absolute -z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            className="w-1/2 brightness-150"
            src="../assets/squid-logo.png"
            alt=""
          />
          <div className="absolute group-hover:backdrop-blur-[3px] duration-200 z-[1] h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%]" />
        </div>
        <div onClick={() => setOpen(true)} className="w-full cursor-pointer grid place-items-center h-full">
          <img className="w-1/2" src="../assets/squid-logo.png" alt="" />
        </div>
      </div>
      <SideBar isMounted={open} unMount={() => setOpen(false)} />
    </div>
  );
}

export default Navbar;
