import Image from "next/image";
import React from "react";

function ClientFeedbackCard({ data }: any) {
  return (
    <div className="border border-[#0000000A] p-16 rounded-[30px] bg-[#F9F9F9] hover:bg-pink-gradient hover:text-white h-[700px] flex flex-col justify-between cursor-pointer">
      <div className="w-16 h-16 relative rounded-full overflow-hidden ml-auto">
        <Image
          src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/video/discover/medium-close-up-shot/thumbnail.jpeg"
          alt="Avatar"
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image scales properly
        />
      </div>

      <div className="group">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path d="M0.659773 13.0091C0.659773 8.51 1.22216 5.32314 2.34693 3.44852C3.52527 1.5739 5.37311 0.636585 7.89046 0.636585V3.6092C6.55144 3.71632 5.58735 4.35905 4.99818 5.53738C4.46258 6.71571 4.19477 8.85814 4.19477 11.9647H7.89046V19.115H0.659773V13.0091ZM13.0323 13.0091C13.0323 8.51 13.5947 5.32314 14.7194 3.44852C15.8442 1.5739 17.692 0.636585 20.263 0.636585V3.6092C18.9239 3.71632 17.9598 4.35905 17.3707 5.53738C16.8351 6.71571 16.5673 8.85814 16.5673 11.9647H20.263V19.115H13.0323V13.0091Z" 
          className="fill-black hover:fill-white "
          />
        </svg>

        <p className="text-[27px] w-[350px]">{data?.feedback}</p>
      </div>
      <div>
        <p>{data?.userName}</p>
        <p>{data?.designation}</p>
      </div>
    </div>
  );
}

export default ClientFeedbackCard;
