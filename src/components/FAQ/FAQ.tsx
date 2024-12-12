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
      "UI/UX design is crucial for business growth as it directly impacts user satisfaction and engagement. A well-designed interface enhances user experience, making products or services more enjoyable and accessible. Positive user experiences lead to customer loyalty, increased retention, and positive word-of-mouth, ultimately driving business growth by attracting and retaining a satisfied customer based",
  },
  {
    id: 3,
    question: "Can your UX design agency help us with web design?",
    answer:
      "Absolutely! Our UX design agency specializes in web design, offering comprehensive services to ensure an optimal online experience for your users. From user research and information architecture to wireframing, prototyping, and final UI design, we are committed to creating visually appealing, intuitive, and user-friendly websites. Our goal is to enhance user engagement and satisfaction, contributing to the overall success and growth of your online presence.",
  },
  {
    id: 4,
    question: "What process should I expect from your UX agency?",
    answer:
      "We follow a systematic design process method when we take on a project. Depending on the project nature and solution offered, it might differ slightly, but it is a unique process all over. Understanding user and research: Initially, we collect the project's data, and if needed, we arrange face-to-face meetings with the clients regarding the project's goals. We try to collect as much data as possible from and about the concerned bodies, the clients, the ultimate user group, and the brand itself. This process includes events like interviews, brainstorming, surveys, strategic research, and so on. We design several project objectives, which might be short-term or long-term. We also analyze user persona, user journey mapping, and customer journey mapping. We also do systematic competitor research to obtain related data that we seek out often during the designing period. We need to know about the brand competitors and their trends to deliver a successful project outcome. Once we have understood what users want and how they want them and also gathered a clear idea of the product that needs to be designed or redesigned, we will move to the stage of creating the solution. UI/ UX design process: As a creative design agency, we must strategize and conceptualize a design process to deliver the final design. Before deciding on the final design concept, like the user interface of the product, we sit for final decision-making with our clients and team members, and if necessary possible updates are considered. The UI UX design process incorporates activities like sitemaps, user flow, sketch interface, wireframing, prototyping, and mockups.",
  },
  {
    id: 5,
    question: "What separates mshstudio from other top UI/UX design agencies?",
    answer:
      "Mshstudio stands out among top UI/UX design agencies through its innovative approach, a diverse portfolio of successful projects, and a commitment to client satisfaction. With a focus on user-centered design, adaptability to industry trends, and a collaborative process, we aim to deliver exceptional digital experiences for our clients.",
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
    <section className="container-fluid pt-10">
      {/* FAQ Title start*/}
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
        <p className="text-[30px] md:text-5xl font-light">
          Frequently Asked Questions
        </p>
      </div>
      {/* FAQ Title end*/}

      {/* FAQ body start*/}
      <div className="divide-y-2">
        {faqData?.map((item: any) => (
          <div
            key={item.id}
            onClick={() => toggleFAQ(item.id)}
            className="py-10 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xl md:text-3xl">{item?.question}</h4>
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
                  activeFAQ === item.id ? "translateY(0)" : "translateY(-10px)",
              }}
            >
              <p
                className={`${
                  activeFAQ === item?.id ? "py-2" : "py-0"
                } text-md md:text-[21px]`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* FAQ body end*/}
    </section>
  );
}

export default FAQ;
