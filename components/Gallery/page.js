"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import OpacityText from "../opacity/page";

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
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

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
    <>
      <OpacityText
      id={"gallery"}
        classNameForContainer={"font-squid text-xl sm:text-2xl desktop:text-3xl my-12"}
        start={"top 90%"}
        end={"top 80%"}
        text={"Gallery"}
      />
      <main className=" `${styles.main }`">
        <div ref={gallery} className={styles.gallery}>
          <Column
            className={styles.col1}
            images={[images[0], images[1], images[2]]}
            y={y}
          />
          <Column
            className={styles.col2}
            images={[images[3], images[4], images[5]]}
            y={y2}
          />
          <Column
            className={styles.col3}
            images={[images[6], images[7], images[8]]}
            y={y3}
          />
          <Column
            className={styles.col4}
            images={[images[9], images[10], images[11]]}
            y={y4}
          />
        </div>
        <div className={styles.spacer}></div>
      </main>
    </>
  );
}

const Column = ({ images, y, className }) => {
  return (
    <motion.div className={`${styles.column} ${className}`} style={{ y }}>
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
