import React from "react";
import Button from "../Button/Button";

function HeroMain() {
  return (
    <div>
      <div className="px-10 pt-10">
        <div className="px-6 flex flex-col gap-8 w-1/2">
          <div className="w-fit">
            <h1 className="text-start w-full text-8xl lg:text-8xl text-white font-squid font-normal">
              <span>HacKo</span>
              <br />
              <span className="mx-24">VErSe</span>
            </h1>
          </div>
          <div className="font-mono font-thin text-white">
            <p>
              Welcome to HackOVerse, presented by the Hackathon and Coding Club
              at BIT Sindri! Dive into innovation with hackathons, workshops,
              tech talks, competitions, showcases, and project expos. Join us to
              celebrate tech and shape the future! See you at HackOVerse!
            </p>
          </div>
          <div>
            <Button  title={"details"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMain;
