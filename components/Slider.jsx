"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import slider1 from "../assets/slider11.jpg";
import slider2 from "../assets/slider222.jpg";
import slider3 from "../assets/slider333.jpg";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/context/translations";

const slides = [
  {
    id: 1,
    img: slider1,
  },
  {
    id: 2,
    img: slider2,
  },
  {
    id: 3,
    img: slider3,
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const { language } = useLanguage();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const difference = touchStartX.current - touchEndX.current;
      if (difference > 50) {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else if (difference < -50) {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="h-[345px] md:h-[690px] overflow-hidden z-30 relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="w-max h-[690px] flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row relative`}
            key={slide.id}
          >
            <div className="h-[50%] md:h-full xl:w-full xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div
              className={`absolute inset-0 flex flex-col items-center pt-28 md:p-0 md:justify-center text-center space-y-3 ${
                language === "ar" ? "rtl" : ""
              }`}
            >
              <h1 className="text-2xl md:text-4xl text-white font-extralight px-4 py-2 rounded">
                {translations[language].sliderTexts[current].title}
              </h1>
              <h3 className="text-4xl md:text-7xl text-white font-Manrope px-4 py-2 rounded">
                {translations[language].sliderTexts[current].description}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex gap-4 absolute left-1/2 transform -translate-x-1/2 bottom-8">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-white cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
