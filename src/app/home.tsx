"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const huen = "Hi! I am a MERN Stack Developer with a fervent passion for continuous learning."

const words = [{ text: "Hi! I am a MERN Stack Developer with a fervent passion for continuous learning." }]



export default function Home() {
  return (
    <div className="#Home">
      <HeroHighlight>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4">
          {/* Image on Left */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-xl w-[200px] h-[200px] object-cover"
          />
          <div className="text-center md:text-left max-w-xl">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto text-left"
            >
              Durgesh{" "}
              <div>

              <Highlight className="text-white dark:text-white">
                FullStack-Developer{" "}
              </Highlight>
              </div>
            </motion.h1>
            
          <div className="w-full text-sm md:text-base text-neutral-600 dark:text-neutral-300 mt-4">
            <TypewriterEffectSmooth words={words} />
          </div>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}
