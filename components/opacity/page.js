"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "../smoothScroll";

const OpacityText = ({
  styleObj,
  text,
  start,
  end,
  classNameForContainer,
  classNameForBody,
}) => {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: start,
        // start: `${window.innerHeight / 10}`,
        end: end,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.01,
    });
  };

  console.log(window.innerHeight);
  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className=""
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <SmoothScroll>
      <main
        ref={container}
        style={styleObj}
        className={`${classNameForContainer} ${styles.main}`}
      >
        <div ref={body} className={`${classNameForBody} ${styles.body}`}>
          {splitWords(text)}
        </div>
      </main>
    </SmoothScroll>
  );
};

export default OpacityText;
