import Image from "next/image";
import React from "react";


function ShowcaseCard({data}:{data:any}) {
  return (
    <div className="w-96">
      <Image
        src={data?.image}
        alt="showcase 1"
        style={{
          maxWidth: "100%",
          height: "auto",
          marginBottom: 20
        }}
      />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[21px] font-medium">
            United health SAAS - UIUX Design
          </h3>
          <div className="text-[14px] flex items-center gap-5 mt-2">
            <p>CASE STUDY</p>
            <p>WEB DESIGN</p>
            <p>APP DESIGN</p>
          </div>
        </div>
        <svg
          width="55"
          height="55"
          viewBox="0 0 59 59"
          className="cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="29.5"
            cy="29.5"
            r="29.5"
            transform="rotate(-90 29.5 29.5)"
            fill="black"
          />
          <path
            d="M37.7046 36.0916C37.7331 36.0917 38.2779 35.7487 38.9151 35.3294C39.5523 34.91 40.0611 34.5419 40.0459 34.5114C40.0305 34.4809 39.7245 34.0466 39.3657 33.5463C38.6453 32.5417 37.9517 31.2137 37.6443 30.2503C36.6865 27.2477 37.1273 24.1299 38.8657 21.6132L39.3083 20.9723L38.4656 20.0868L37.6229 19.2012L37.0659 19.6183C33.4166 22.3513 29.0426 22.0368 25.1648 18.7628C24.9116 18.549 24.6951 18.384 24.6836 18.396C24.5782 18.5068 23.2527 20.7842 23.2531 20.854C23.2533 20.9044 23.4851 21.1107 23.7682 21.3122C26.9027 23.544 30.4891 24.2717 33.2613 23.2385L33.9263 22.9907L24.681 32.7414L18.8349 38.9072L20.5403 40.6993L26.4228 34.5402L35.6799 24.8478L35.3994 25.7481C34.6716 28.0837 34.9697 30.8516 36.2497 33.6422C36.6144 34.4372 37.5967 36.0911 37.7046 36.0916Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default ShowcaseCard;
