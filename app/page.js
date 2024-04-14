import CookingAnimation from "@/components/CookingAnimation/CookingAnimation";
import Navbar from "@/components/Navbar/Navbar";
import HeroHeadingBackgroundText from "@/components/Hero/HeroHeading";
import HeroMain from "@/components/Hero/HeroMain";
import { BackgroundBeamsAnimation } from "@/components/BackgroundBeams/BackgroundBeams";
import PreLoader from "@/components/PreLoader/Preloader";

export default function Home() {
  return (
    <>
      {/* <CookingAnimation /> */}
      {/* <PreLoader /> */}
      <Navbar />
      <HeroHeadingBackgroundText />
      <HeroMain />
      <BackgroundBeamsAnimation />
    </>
  );
}
