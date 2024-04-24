import React from "react";
import OpacityText from "../opacity/page";

function WhatIsHackoverse() {
  return (
    <div className="w-full px-14 py-14 bg-black text-white">
      <div className="w-full justify-center">
        <OpacityText
          classNameForContainer={"font-squid text-3xl"}
          start={"top 80%"}
          end={"top 60%"}
          text={"What is HacKOVErSe ?"}
        />
      </div>
      <div className="w-full flex justify-center mt-10">
        <OpacityText
          classNameForContainer={"font-shareTechMono mb-20"}
          classNameForBody={"text-xl"}
          start={"top 80%"}
          end={"bottom 80%"}
          text={
            "Embrace the electrifying realm of technology and creativity at HackOVerse, proudly presented by the Hackathon and Coding Club at BIT Sindri! Get ready to immerse yourself in a whirlwind of innovation, as we bring together hackathons, enriching workshops, enlightening tech talks, thrilling competitions, captivating showcases, and inspiring project expos. Join us in shaping the future of technology and celebrating the boundless possibilities it offers! Let's come together and make waves in the digital universe. See you at HackOverse!"
          }
        />
      </div>
    </div>
  );
}

export default WhatIsHackoverse;
