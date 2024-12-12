"use client";
import React, { useState, useRef } from "react";
import ShowcaseCard from "./ShowcaseCard";
import showcase1 from "../../../public/images/showcase/showcase-1.png";
import showcase2 from "../../../public/images/showcase/showcase-2.png";
import showcase3 from "../../../public/images/showcase/showcase-3.png";
import showcase4 from "../../../public/images/showcase/showcase-4.png";
import showcase5 from "../../../public/images/showcase/showcase-5.png";
import shocase6 from "../../../public/images/showcase/showcase-5.png"

const showCaseData = [
  { title: "United health SAAS - UIUX Design", image: showcase1 },
  { title: "Worx - Branding & UIUX Design", image: showcase2 },
  { title: "MyEco- Branding & UIUX Design", image: showcase3 },
  { title: "Flyeasy - Branding & UIUX Design", image: showcase4 },
  { title: "WOOW Cargo  Software Redesign", image: showcase5 },
  { title: "Frest - Web Design & Development", image: showcase5 }, // Added another showcase data
];

function Showcase() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Function to show the next set of 3 items
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (showCaseData.length - 2));
  };

  // Function to show the previous set of 3 items
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + showCaseData.length - 2) % (showCaseData.length - 2));
  };

  // Get the next 3 items to display
  const displayedData = [
    showCaseData[index],
    showCaseData[(index + 1) % showCaseData.length],
    showCaseData[(index + 2) % showCaseData.length],
  ];

  return (
    <section className="bg-[#F6F6F6] mb-20 py-20">
      <div className="container-fluid">
        <div className="flex items-center gap-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_24_2303)">
              <mask
                id="mask0_24_2303"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="66"
                height="66"
              >
                <path d="M66 0H0V66H66V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_24_2303)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.44248e-06 9.12585e-07L2.48827e-06 16.5L33 33L7.21238e-07 49.5L0 66L33 49.5V66L66 49.5V33V16.5L33 0V16.5L1.44248e-06 9.12585e-07ZM33 16.5V33V49.5L66 33L33 16.5Z"
                  fill="#E9B8FF"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_24_2303">
                <rect width="66" height="66" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-3xl md:text-5xl font-light">Showcase</p>
        </div>
        <p className="text-[22px] md:text-3xl md:ml-16 mt-3 w-[80%]">
          <span className="text-[#727272]">An Experience design agency </span>
          building high-end products and experiences that grow your business
          <span className="text-[#727272]"> exponentially.</span>
        </p>

        <div className="desktop-component">
          <div className="flex items-center justify-end gap-5">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <path
                d="M19.7173 11.1449C19.6961 11.1237 19.0488 10.9614 18.2788 10.7844C17.5087 10.6075 16.8704 10.4897 16.8601 10.5226C16.8499 10.5556 16.7703 11.09 16.6831 11.7104C16.5081 12.9561 16.0844 14.4105 15.6316 15.3201C14.2202 18.155 11.688 20.0321 8.61671 20.52L7.83462 20.6442L7.83462 21.8965L7.83462 23.1489L8.54348 23.2679C13.1876 24.047 16.2154 27.5195 16.7818 32.7161C16.8188 33.0554 16.863 33.3329 16.88 33.3329C17.0366 33.3329 19.6319 32.7075 19.681 32.6579C19.7165 32.6221 19.6901 32.304 19.6222 31.9511C18.8712 28.0439 16.7209 24.8645 13.9304 23.5351L13.2611 23.2162L27.0256 23.1912L35.7295 23.1753L35.7295 20.6408L27.0033 20.625L13.2711 20.5999L14.1162 20.1717C16.3085 19.0611 18.0442 16.8824 19.0663 13.958C19.3575 13.1248 19.797 11.2254 19.7173 11.1449Z"
                fill="black"
              />
            </svg>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={handleNext}
              aria-label="Next"
            >
              <path
                d="M24.2515 32.8229C24.2726 32.8441 24.92 33.0064 25.6899 33.1833C26.46 33.3603 27.0984 33.478 27.1086 33.4452C27.1188 33.4122 27.1985 32.8777 27.2856 32.2574C27.4606 31.0117 27.8844 29.5573 28.3372 28.6476C29.7485 25.8128 32.2808 23.9357 35.352 23.4478L36.1341 23.3236L36.1341 22.0712L36.1341 20.8188L35.4253 20.6999C30.7811 19.9208 27.7534 16.4483 27.1869 11.2517C27.15 10.9124 27.1058 10.6348 27.0888 10.6348C26.9322 10.6348 24.3368 11.2603 24.2878 11.3098C24.2523 11.3457 24.2787 11.6638 24.3465 12.0166C25.0975 15.9239 27.2479 19.1033 30.0383 20.4327L30.7077 20.7516L16.9431 20.7766L8.23926 20.7924L8.23926 23.3269L16.9655 23.3428L30.6977 23.3688L29.8525 23.797C27.6602 24.9077 25.9246 27.0864 24.9025 30.0108C24.6115 30.8435 24.171 32.0433 24.2515 32.8229Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            className="showcase-container mt-10 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 overflow-hidden"
            // style={{
            //   display: "flex",
            //   transition: "transform 0.5s ease",
            //   transform: `translateX(-${index * 33.33}%)`,
            // }}
          >
            {displayedData.map((item, i) => (
              <div
                key={i}
                className="showcase-item"
                style={{ flex: "0 0 33.33%" }}
              >
                <ShowcaseCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
