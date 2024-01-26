import React from "react";

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Contact Me
      </h1>
      <div className="w-full h-full p-52">
        <div className="">
          <input type="text" placeholder="Enter Your Name" />
        </div>
      </div>
    </div>
  );
}
