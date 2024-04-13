import CookingAnimation from "@/components/CookingAnimation/CookingAnimation";
import Navbar from "@/components/CookingAnimation/Navbar";
import HeroHeadingBackgroundText from "@/components/CookingAnimation/Hero/HeroHeading";
import HeroMain from "@/components/CookingAnimation/Hero/HeroMain";
import { BackgroundBeamsDemo } from "@/components/CookingAnimation/BackgroundBeams/BackgroundBeams";

export default function Home() {
  return (
    <>
      {/* <CookingAnimation /> */}
      <Navbar />
      <HeroHeadingBackgroundText />
      <HeroMain />
      <BackgroundBeamsDemo />
    </>
  );
}
