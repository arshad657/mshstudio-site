"use client";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const faqData = [
  {
    id: 1,
    question: "What are your focus areas as a UI/UX agency?",
    answer:
      "As a UI/UX agency, our core focus lies in understanding user needs through research, crafting intuitive designs with a strong emphasis on user interface and experience. We specialize in wireframing, prototyping, and collaboration with development teams to ensure seamless implementation, continually iterating based on user feedback for optimal digital experiences.",
  },
  {
    id: 2,
    question: "Why is UI/UX design important for your business growth?",
    answer:
      "As a UI/UX agency, our core focus lies in understanding user needs through research, crafting intuitive designs with a strong emphasis on user interface and experience. We specialize in wireframing, prototyping, and collaboration with development teams to ensure seamless implementation, continually iterating based on user feedback for optimal digital experiences.",
  },
  {
    id: 3,
    question: "Can your UX design agency help us with web design?",
    answer:
      "As a UI/UX agency, our core focus lies in understanding user needs through research, crafting intuitive designs with a strong emphasis on user interface and experience. We specialize in wireframing, prototyping, and collaboration with development teams to ensure seamless implementation, continually iterating based on user feedback for optimal digital experiences.",
  },
  {
    id: 4,
    question: "What process should I expect from your UX agency?",
    answer:
      "As a UI/UX agency, our core focus lies in understanding user needs through research, crafting intuitive designs with a strong emphasis on user interface and experience. We specialize in wireframing, prototyping, and collaboration with development teams to ensure seamless implementation, continually iterating based on user feedback for optimal digital experiences.",
  },
];

function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState();

  const toggleFAQ = (id: any) => {
    if (id === activeFAQ) {
      setActiveFAQ(undefined);
    } else {
      setActiveFAQ(id);
    }
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="flex items-center gap-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_24_2303)">
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
          <p className="text-5xl font-light">Frequently Asked Questions</p>
        </div>
        <div className="divide-y-2">
          {faqData?.map((item: any) => (
            <div
              key={item.id}
              onClick={() => toggleFAQ(item.id)}
              className="py-10 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-3xl">{item?.question}</h4>
                {activeFAQ === item.id ? (
                  <BiMinus size={35} />
                ) : (
                  <BiPlus size={35} />
                )}
              </div>
              <div
                className={`transform transition-all duration-500 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: activeFAQ === item.id ? "500px" : "0",
                  opacity: activeFAQ === item.id ? "1" : "0",
                  transform:
                    activeFAQ === item.id
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <p className={`${activeFAQ === item?.id ? 'py-2' : 'py-0'} text-lg`}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
