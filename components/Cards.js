"use client";
import React from "react";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <div className="  pr-4 first flex row my-2 text-white justify-center items-center w-[600px] h-[400px] ">
      <div className="line text-center flex-col items-center flex justify-start   h-full w-fit">
        <div className="circle border-2 rounded-3xl  h-3 w-3 border-[#ec0e89] bg-[#ec0e89] "></div>
        <div className="line border-2 h-full  border-[#ec0e89]"></div>
      </div>
      <div className="relative date w-1/2 text-center items-center flex justify-center h-3/4 ">
        <span className=" text-3xl absolute font-bold flex items-center justify-center text-center transform -rotate-90 w-3/4 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  ">
          <span className="pr-2">{"11th"} </span>
          <span className="px-2">{"Nov"}</span>
          <span>{"2021"}</span>
        </span>
      </div>
      <div className=" content w-auto h-full text-center items-center flex justify-center flex-col">
        <img
          className="object-contain bg-no-repeat h-full w-full"
          src="/assets/war_of_web.png"
        ></img>
        <span className="text-left">
          <span className="font-bold text-xl">{"We are HnCCians "}</span>
          <br></br> loremkfsd fds fdsk fdsjf dskj fdsjkf sdf sdkfds fsfdsf
          dsjfds fds fkj sdf dsjf dskf dsf dsk{" "}
        </span>
      </div>
    </div>
  );
};

export default Cards;
