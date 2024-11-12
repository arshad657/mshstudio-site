"use client";
import React, { useState } from "react";
import ClientFeedbackCard from "./ClientFeedbackCard";

const data = [
  {
    id: 1,
    userName: "Danny John",
    designation: "CEO on Shoots and reels",
    feedback:
      "Impressed with exceptional work, stunning design, and great adaptability.",
  },
  {
    id: 2,
    userName: "Brown",
    designation: "CEO on Tiktok",
    feedback:
      "Exceptionally professional job. Surpassed my expectations. Communication was seamless and rapid.",
  },
  {
    id: 3,
    userName: "Fill Salt",
    designation: "CEO on Microsoft",
    feedback: "Stunning design, and great adaptability.",
  },
];
function ClientFeedback() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const displayedData = [data[index], data[(index + 1) % data.length]];
  return (
    <section>
      <div className="container-fluid">
        <p className="text-[238px]">What Client</p>
        <div className="flex items-center justify-between">
          <span className="text-[238px] -py-10">Says</span>
          <p className="font-[22px]">
            Cultivating Trust Through <br /> Each Testimonial Shared.
          </p>
          <div className="flex items-center gap-5">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={handlePrev}
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
            >
              <path
                d="M24.2515 32.8229C24.2726 32.8441 24.92 33.0064 25.6899 33.1833C26.46 33.3603 27.0984 33.478 27.1086 33.4452C27.1188 33.4122 27.1985 32.8777 27.2856 32.2574C27.4606 31.0117 27.8844 29.5573 28.3372 28.6476C29.7485 25.8128 32.2808 23.9357 35.352 23.4478L36.1341 23.3236L36.1341 22.0712L36.1341 20.8188L35.4253 20.6999C30.7811 19.9208 27.7534 16.4483 27.1869 11.2517C27.15 10.9124 27.1058 10.6348 27.0888 10.6348C26.9322 10.6348 24.3368 11.2603 24.2878 11.3098C24.2523 11.3457 24.2787 11.6638 24.3465 12.0166C25.0975 15.9239 27.2479 19.1033 30.0383 20.4327L30.7077 20.7516L16.9431 20.7766L8.23926 20.7924L8.23926 23.3269L16.9655 23.3428L30.6976 23.3679L29.8526 23.796C27.6603 24.9067 25.9246 27.0854 24.9025 30.0098C24.6112 30.8429 24.1717 32.7423 24.2515 32.8229Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="grid grid-cols-2 gap-10 w-full">
            {displayedData.map((item) => (
                <ClientFeedbackCard data={item}/>
            //   <div
            //     key={item.id}
            //     style={{
            //       border: "1px solid black",
            //       padding: "20px",
            //       borderRadius: "5px",
            //       minWidth: "200px",
            //       textAlign: "center",
            //     }}
            //   >
            //     <p>
            //       <strong>{item.userName}</strong>
            //     </p>
            //     <p>{item.designation}</p>
            //     <p>"{item.feedback}"</p>
            //   </div>
            ))}
          </div>
          {/* <div style={{ marginTop: "20px" }}>
              <button onClick={handlePrev} style={{ marginRight: "10px" }}>
                Previous
              </button>
              <button onClick={handleNext}>Next</button>
            </div> */}
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;