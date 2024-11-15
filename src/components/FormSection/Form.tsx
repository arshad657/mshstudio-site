import React from "react";

function Form() {
  return (
    <section className="grid grid-cols-2 gap-16 w-[80%]">
      <div className="flex flex-col gap-2 h-fit">
        <label htmlFor="name" className="text-xl">
          Name & Company
        </label>
        <input
          className="border-b outline-none py-2"
          placeholder="John from Apple"
        />
      </div>
      <div className="flex flex-col gap-2 h-fit">
        <label htmlFor="name" className="text-xl">
          Your Email
        </label>
        <input
          className="border-b outline-none py-2"
          placeholder="johnapple@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2 h-fit">
        <label htmlFor="name" className="text-xl">
          I’m interested in...
        </label>
        <input className="border-b outline-none py-2" placeholder="Website Design" />
      </div>
      <div className="flex flex-col gap-2 h-fit">
        <label htmlFor="name" className="text-xl">
          Project budget (USD)
        </label>
        <input
          className="border-b outline-none py-2"
          placeholder="Enter your Price"
          type="number"
        />
      </div>
      <div className="flex flex-col gap-2 h-fit col-span-2">
        <label htmlFor="name" className="text-xl">
          Tell us more about your project
        </label>
        <input
          className="border-b outline-none py-2"
          placeholder="Something about your great idea"
        />
      </div>
      <button className="bg-black rounded-full w-[209px] h-[58px] text-white">
        Submit the Request
      </button>
    </section>
  );
}

export default Form;
