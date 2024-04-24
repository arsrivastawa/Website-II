import React from "react";
import Button from "../Button/Button";

function HeroMain() {
  return (
    <div>
      <div className="px-5 h-[90vh] xs:px-8 sm:pt-12 sm:px-10 pt-12">
        <div className="px-2 sm:px-6 flex flex-col gap-8 w-full justify-center desktop:justify-start desktop:w-1/2">
          <div className="w-full">
            <h1 className="text-center desktop:text-start w-full text-4xl xs:text-6xl md:text-6xl desktop:text-7xl lg:text-7xl xl:text-8xl text-white font-squid font-normal">
              <span>HacKo</span>
              <br />
              <span className="ml-16 sm:ml-20 lg:ml-24">VErSe</span>
            </h1>
          </div>
          <div className="text-white font-shareTechMono">
            <p>
              Welcome to HackOverse, presented by the Hackathon and Coding Club
              at BIT Sindri! Dive into innovation with hackathons, workshops,
              tech talks, competitions, showcases, and project expos. Join us to
              celebrate tech and shape the future! See you at HackOverse!
            </p>
          </div>
          <div>
            <Button title={"details"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMain;
