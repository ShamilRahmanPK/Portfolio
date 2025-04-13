"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const LocoScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");

    if (!scrollEl) return;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.07,
      multiplier: 1,
      class: "is-reveal",
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};
