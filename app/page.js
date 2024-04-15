"use client";

import CookingAnimation from "@/components/CookingAnimation/CookingAnimation";
import Navbar from "@/components/Navbar/Navbar";
import HeroHeadingBackgroundText from "@/components/Hero/HeroHeading";
import HeroMain from "@/components/Hero/HeroMain";
import { BackgroundBeamsAnimation } from "@/components/BackgroundBeams/BackgroundBeams";
import PreLoader from "@/components/PreLoader/Preloader";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  },[]);

  return (
    <>
      {!loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <HeroHeadingBackgroundText />
          <HeroMain />
          <BackgroundBeamsAnimation />
        </>
      )}
      {/* <CookingAnimation /> */}
      {/* <PreLoader /> */}
    </>
  );
}
