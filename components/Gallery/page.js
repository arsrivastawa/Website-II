"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
  "anime_girl_5.jpg",
];

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-500, height * 2.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-500, height * 2.5]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className=" `${styles.main }`">
      <div className=" py-10 font-squid  my-10 flex justify-center items-center text-white font-bold text-3xl mx-[45%] `${styles.spacer}`">
        <span>Gallery</span>
      </div>
      <div ref={gallery} className={styles.gallery}>
        <div className="w-full h-full flex justify-center">
          <Column images={[images[0], images[1], images[2]]} y={y} />
        </div>
        <div className="w-full flex items-start justify-center">
          <Column images={[images[3], images[4], images[5]]} y={y2} />
        </div>
        <div className="w-full h-full flex justify-center">
          <Column images={[images[6], images[7], images[8]]} y={y3} />
        </div>
        <div className="w-full h-full flex justify-center">
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/assets/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
