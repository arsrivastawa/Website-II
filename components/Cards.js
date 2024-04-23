"use client";
import React from "react";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <div className=" se:bg-black se:h-[400px] se:w-[320px] xs:w-[400px] xs:bg-black  xs:h-[300px]  se:items-center se:p-0 se:pr-0 pr-4 first xs:flex xs:flex-row xs:my-2 text-white xs:justify-center xs:items-center md:w-[600px] md:h-[400px] sm:w-[500px] sm:h-[350px] se:flex">
      <div className="se:p-0 line text-center  flex-col items-center flex justify-start   xs:h-full w-fit  xs:flex se:h-1/2">
        <div className="circle border-2 rounded-3xl  h-3 w-3 border-[#ec0e89] bg-[#ec0e89] "></div>
        <div className="line border-2 h-full  border-[#ec0e89]"></div>
      </div>
      <div className="  relative date w-1/2 se:w-1/5 text-center items-center flex justify-center h-3/4 ">
        <span className=" xs:text-3xl se:text-xl se:font-bold absolute font-bold flex items-center justify-center text-center transform -rotate-90 w-3/4 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  ">
          <span className="pr-2">{"11th"} </span>
          <span className="px-2">{"Nov"}</span>
          <span>{"2021"}</span>
        </span>
      </div>
      <div className=" content xs:w-full se:w-[170px] xs:h-full text-center items-center flex justify-center flex-col">
        <img
          className="se:w-full object-contain bg-no-repeat xs:h-full xs:w-full"
          src="/assets/war_of_web.png"
        ></img>
        <span className="xs:block text-left">
          <span className="  xs:block font-bold se:text-sm  xs:text-xl">{"We are HnCCians "}</span>
           <span className=" se:hidden xs:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, eum.</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default Cards;
