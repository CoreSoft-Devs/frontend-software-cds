'use client'
import useScroll from "@/hooks/useScroll";
import Image from "next/image";
import React from "react";

const images = [
  "/demo-2.webp",
  "/demo-3.webp",
  "/demo-4.webp",
  "/demo-5.webp",
  "/demo-1.webp",
  "/demo-6.webp",
  "/demo-7.webp",
  "/demo-8.webp",
  "/demo-9.webp",
  "/demo-10.webp",
  "/demo-11.webp",
];

const Gallery = () => {
  const { scrolled } = useScroll(700);

  return (
    <article className="flex w-auto h-full relative overflow-x-hidden">
      <ul
        style={{ animationPlayState: scrolled ? "running" : "paused" }}
        className="w-full py-20 flex flex-row whitespace-nowrap animate-marquee lg:animate-large-marquee relative"
      >
        {images.map((img, index) => (
          <li
            key={index}
            className="flex justify-center px-5 min-w-[75%] md:min-w-[50%] lg:min-w-[25%] h-auto rounded-xl relative overflow-hidden odd:rotate-3 even:-rotate-3 hover:rotate-0 hover:scale-105 transition-all brightness-90 hover:brightness-105"
          >
            <Image
              src={img}
              alt={`image demo-${index}`}
              width={720}
              height={480}
              className="bg-gray-500/30 min-w-[75%] h-auto aspect-[4/3] object-cover rounded-xl pointer-events-none select-none"
            />
          </li>
        ))}
      </ul>
      <ul
          style={{ animationPlayState: scrolled ? "running" : "paused" }}
        className="w-full absolute top-0 py-20 flex flex-row whitespace-nowrap animate-marquee2 lg:animate-large-marquee2"
      >
        {images.map((img, index) => (
          <li
            key={index}
            className="flex justify-center px-5 min-w-[75%] md:min-w-[50%] lg:min-w-[25%] h-auto rounded-xl relative overflow-hidden odd:rotate-3 even:-rotate-3 hover:rotate-0 hover:scale-105 transition-all brightness-90 hover:brightness-105"
          >
            <Image
              src={img}
              alt={`image demo-${index}`}
              width={720}
              height={480}
              className="bg-gray-500/30 min-w-[75%] h-auto aspect-[4/3] object-cover rounded-xl pointer-events-none select-none"
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Gallery;
