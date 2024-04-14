"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { MdCancel } from "react-icons/md";
import { BackgroundBeamsAnimation } from "../BackgroundBeams/BackgroundBeams";

function SideBar({ isMounted, unMount }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      document.documentElement.classList.add("scroll-lock");
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.documentElement.classList.remove("scroll-lock");
      }, 2000);
    }
    return () => {
      if (
        document.documentElement.classList.contains("scroll-lock") &&
        isTransitioning
      ) {
        document.documentElement.classList.remove("scroll-lock");
      }
    };
  }, [isMounted, isTransitioning]);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <div
      className={`sidebar-container z-[100] top-0 left-0 fixed ${
        isTransitioning && isMounted ? "translate-x-0" : "-translate-x-full"
      } w-full h-full bg-transparent duration-300`}
    >
      <BackgroundBeamsAnimation zIndex={1} />

      <div className="absolute overflow-x-hidden -z-[79] overflow-y-hidden h-screen bg-animation-container w-full">
        <div className="body-first-child" />
        <div className="body-second-child -left-[10%] -bottom-[17%] sm:-bottom-[30%] w-[180px] min-h-[280px] xs:w-[250px] xs:min-h-[350px] sm:w-[300px] sm:min-h-[400px] md:w-[300px] md:min-h-[400px] desktop:w-[300px] desktop:min-h-[420px] lg:w-[350px] lg:min-h-[500px] xl:w-[400px] xl:min-h-[600px]" />
        <div className="body-third-child -right-[10%] -top-[17%] sm:-top-[30%] w-[180px] min-h-[280px] xs:w-[250px] xs:min-h-[350px] sm:w-[300px] sm:min-h-[400px] md:w-[300px] md:min-h-[400px] desktop:w-[300px] desktop:min-h-[420px] lg:w-[350px] lg:min-h-[500px] xl:w-[400px] xl:min-h-[600px]" />
      </div>
      <div className="w-full h-full absolute top-0 left-0 -z-[90] bg-black" />
      <div className="sidebar-navbar w-full flex flex-row justify-center border-b border-b-[#ec0e89]">
        <div className="w-full flex flex-row justify-between px-6 py-3 desktop:px-10 desktop:py-4 md:px-16 md:py-5">
          <a
            href="https://www.hnccbits.com/"
            target="_blank"
            className=" flex w-fit justify-center items-center border-2 border-[#ec0e89] rounded-full"
          >
            <img
              src="../assets/hncc-logo.png"
              alt="HnCC_logo"
              className="w-[50px]"
            />
          </a>
          <div className="hamburger-icon-container flex justify-center items-center relative group w-[70px]">
            <div className="w-full h-full flex justify-center items-center absolute -z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                className="w-1/2 brightness-150"
                src="../assets/cancel.png"
                alt=""
              />
              <div className="absolute group-hover:backdrop-blur-[6px] duration-200 z-[1] h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%]" />
            </div>
            <div
              onClick={unMount}
              className="w-full cursor-pointer grid place-items-center h-full"
            >
              <img className="w-1/2" src="../assets/cancel.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid font-squid place-content-center font-oxygen font-medium gap-y-4 p-4 text-base sm:text-lg">
        <Link href={"/"}>
          <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer text-white hover:text-[#ec0e89]">
            Home
          </li>
        </Link>
        <Link href={"/about"}>
          <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer text-white hover:text-[#ec0e89]">
            Events
          </li>{" "}
        </Link>
        <Link href={"/services"}>
          <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer text-white hover:text-[#ec0e89]">
            Gallery
          </li>{" "}
        </Link>
        <Link href={"/contact"}>
          <li className="lg:px-8 md:px-6 duration-200 sm:px-4 flex text-center justify-center items-center px-8 hover:cursor-pointer text-white hover:text-[#ec0e89]">
            Demo
          </li>
        </Link>
      </div>
    </div>,
    document.getElementById("overlay")
  );
}

export default SideBar;
