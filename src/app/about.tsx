"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const words =
  "I am a MERN developer student at IIIT Bhopal, deeply interested in Linux and passionate about mastering data structures & algorithms and DevOps. I am committed to advancing my skills in these areas to contribute effectively to software engineering projects.";

export function About() {
  return (
    <section
      id="about"
      className="px-4 py-12 md:py-20 bg-background text-foreground"
    >
      <div className="max-w-3xl mx-auto text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Hi, I'm Durgesh 👋
        </h2>

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

        {/* Tech Stack Icons */}
        <div className="pt-12 text-center">
  <h3 className="text-2xl font-semibold mb-4">Current Tech Stack</h3>
  <div className="flex flex-wrap justify-center gap-6 text-4xl">
    {[
      { src: "/nextjs.svg", alt: "Next.js" },
      { src: "/react.svg", alt: "React.js" },
      { src: "/express.png", alt: "Express.js" },
      { src: "/nodejs.png", alt: "Node.js" },
      { src: "/tailwind.svg", alt: "Tailwind CSS" },
      { src: "/postgre.png", alt: "PostgreSQL" },
      { src: "mongodb.svg", alt: "MongoDB" },
    ].map((tech, index) => (
      <div
        key={index}
        className="group relative hover:scale-150 hover:rotate-3 transition-all duration-300 ease-in-out"
      >
        <img
          src={tech.src}
          alt={tech.alt}
          title={tech.alt}
          className="h-12 w-12 object-contain drop-shadow-md group-hover:drop-shadow-xl"
        />
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition duration-300">
          {tech.alt}
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
