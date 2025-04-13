// components/AnimatedElement.js
"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/scroll-animations.module.css'; // Import CSS module

const AnimatedElement = ({ children, animation, threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`${styles[animation]} ${isVisible ? styles.animate : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;