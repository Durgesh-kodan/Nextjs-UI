"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const words =
  " I am a MERN developer student at IIIT Bhopal, am deeply interested in Linux and passionate about mastering data structures & algorithms and DevOps. I am committed to advancing my skills in these areas to contribute effectively in software engineering projects.";
export function About() {
  return (
    <div id="about">
      Hi i am durgesh
      <TextGenerateEffect words={words}/>
    </div>
  );
}
