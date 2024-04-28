import React from "react";

function HeroBackgroundText() {
  return (
    <div className="w-full absolute top-[1%] desktop:top-[0%] -z-[1] opacity-15 left-1/2 -translate-x-1/2">
      <div>
        <h1 className="w-full text-center stroke-text text-[40px] xs:text-[60px] sm:text-[80px] md:text-[100px] desktop:text-[120px] lg:text-[140px] xl:text-[160px] 2xl:text-[180px] font-squid font-normal">
          HacKOVErSe
        </h1>
      </div>
    </div>
  );
}

export default HeroBackgroundText;
