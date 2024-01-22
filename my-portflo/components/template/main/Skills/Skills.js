import SkillText from "@/components/modules/SkillText/SkillText";
import SkillsDataProvider from "@/components/modules/SkillsDataProvider/SkillsDataProvider";
import { Frontend_skill } from "@/constants";
import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute ">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto "
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
}
