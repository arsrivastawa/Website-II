"use client";
import Navbar from "@/components/Navbar/Navbar";
import HeroHeadingBackgroundText from "@/components/Hero/HeroHeading";
import HeroMain from "@/components/Hero/HeroMain";
import { BackgroundBeamsAnimation } from "@/components/BackgroundBeams/BackgroundBeams";
import Background from "@/components/Background/Background";
import Loader from "./loading";
// import PreLoader from "@/components/PreLoader/Preloader";
import { useEffect, useState } from "react";
import WhatIsHackoverse from "@/components/WhatIsHackoverse/WhatIsHackoverse";
import Cards from "@/components/Cards";
import HorizontalScroll from "@/components/horizontalScroll/page";

export default async function Home() {
  const [loading, setLoading] = useState(false);
  // console.log(card);
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {!loading ? (
        <Loader />
      ) : (
        <>
          <Background />
          <Navbar />
          <HeroHeadingBackgroundText />
          <HeroMain />
          <BackgroundBeamsAnimation />
          <WhatIsHackoverse />
          <HorizontalScroll />
        </>
      )}
    </>
  );
}
