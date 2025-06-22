"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words =
  "I am a MERN developer student at IIIT Bhopal, deeply interested in Linux and passionate about mastering data structures & algorithms and DevOps. I am committed to advancing my skills in these areas to contribute effectively to software engineering projects.";

export function About() {
  return (
    <section
      id="about"
      className="px-4 py-12 md:py-20 bg-background text-foreground"
    >
      <div className="max-w-3xl mx-auto text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Hi, I'm Durgesh 👋</h2>

        <TextGenerateEffect words={words} />

        {/* Stylish Button */}
        <div className="pt-8 text-center">
          <a
            href="https://drive.google.com/file/d/1Zalu8v6HONYTiDoNyTE7y8IetbXgFhvU/view"
            className="relative inline-block text-lg group"
            target="_blank"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">View Resume</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>
    </section>
  );
}
