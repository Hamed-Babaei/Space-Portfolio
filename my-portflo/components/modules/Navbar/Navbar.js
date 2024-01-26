import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50  bg-[#0300147] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full items-center flex flex-row justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="Logo "
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Hamed Babaei
          </span>
        </Link>

        <div className="flex flex-row gap-5">
          <a href="#">
            <FaLinkedin className="text-white size-6" />
          </a>
          <a href="#">
            <FaInstagram className="text-white size-6" />
          </a>
          <a href="#">
            <FaDiscord className="text-white size-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
