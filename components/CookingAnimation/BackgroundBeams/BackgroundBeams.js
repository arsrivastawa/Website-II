"use client";
import React from "react";
import { BackgroundBeams } from "./BackgroundBeam";

export function BackgroundBeamsDemo() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-[75]">
      <div className=" w-full h-full bg-transparent relative flex flex-col items-center justify-center antialiased">
        <BackgroundBeams />
      </div>
    </div>
  );
}