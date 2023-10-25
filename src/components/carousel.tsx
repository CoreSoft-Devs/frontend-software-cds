"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import useScroll from "@/hooks/useScroll";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const images = [
  // "/demo-2.webp",
  // "/demo-3.webp",
  // "/demo-4.webp",
  "/demo-5.webp",
  "/demo-1.webp",
  "/demo-6.webp",

  "/demo-7.webp",
  // "/demo-8.webp",
  "/demo-9.webp",
  "/demo-10.webp",
  "/demo-11.webp",
];

const CarouselImages = () => {
  const imgRef = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(700 * (images.length - 2));
  const { scrollY, scrolled } = useScroll(700);
  const { isMobile } = useMediaQuery();

  useEffect(() => {
    imgRef.current &&
      setCurrentHeight(imgRef.current?.clientWidth * (images.length - 1));
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgRef.current && imgRef.current?.clientWidth]);

  return (
    <article
      className="w-full h-full md:max-h-fit mx-auto relative"
      style={{
        height: !isMobile ? `${currentHeight + 700}px` : "",
      }}
    >
      <ul className="flex flex-row items-center snap-x snap-mandatory gap-4 px-4 w-full overflow-x-auto md:overflow-clip pb-5  md:h-[calc(100vh-64px)] transition-all md:px-6 md:gap-6 md:snap-none md:sticky md:top-[64px] scroll-smooth md:pb-0">
        <div className="hidden md:top-[-64px] md:absolute md:flex inset-0 md:h-screen md:w-screen bg-gradient-to-r dark:from-black dark:via-black dark:to-blue-500/30 from-white via-white to-blue-100/30 opacity-30" />
        {images.map((img, index) => (
          <li
            key={index}
            className="w-fit h-80 md:h-[calc(100vh-120px)] relative flex-shrink-0 flex items-center rounded-xl overflow-hidden snap-always snap-center shadow-lg md:shadow-xl  transition-all lg:max-w-[calc(100vw-100px)] lg:max-h-[620px] 2xl:max-h-full transform ease-linear"
            style={{
              transform:
                (!isMobile &&
                  scrolled &&
                  (Math.abs(-scrollY) < currentHeight + 700
                    ? `translateX(${-scrollY + 700}px)`
                    : `translateX(${-currentHeight - 110}px)`)) ||
                "",
            }}
          >
            <Image
              src={img}
              alt={`image demo-${index}`}
              height={620}
              width={1286}
              priority
              ref={imgRef}
              className="w-fit rounded-xl h-80 md:h-[calc(100vh-120px)] relative flex-shrink-0 flex object-cover lg:max-w-[calc(100vw-100px)] lg:max-h-[620px] 2xl:max-h-full"
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CarouselImages;
