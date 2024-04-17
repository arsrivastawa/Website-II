"use client";
import Navbar from "@/components/Navbar/Navbar";
import HeroHeadingBackgroundText from "@/components/Hero/HeroHeading";
import HeroMain from "@/components/Hero/HeroMain";
import { BackgroundBeamsAnimation } from "@/components/BackgroundBeams/BackgroundBeams";
import Background from "@/components/Background/Background";
import Loader from "./loading";
// import PreLoader from "@/components/PreLoader/Preloader";
import { useEffect, useState } from "react";

export default async function Home() {
  const [loading, setLoading] = useState(false);

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
        </>
      )}
    </>
  );
}
