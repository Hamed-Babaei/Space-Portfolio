import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">
                dev.hamedbabaei@gmail.com
              </span>
            </a>
          </div>
        </div>
        <hr className="w-full text-gray-400 pb-2 pt-3" />
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Developed By
          <span className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &nbsp;Hamed Babaei&nbsp;
          </span>
          2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
}
