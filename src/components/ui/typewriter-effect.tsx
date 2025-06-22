"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split sentence into words → then split words into characters
  const wordsArray = words.flatMap((word) =>
    word.text.split(" ").map((w) => ({
      ...word,
      text: w.split(""),
    }))
  );

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        ".char", // Animate each character span
        {
          opacity: 1,
        },
        {
          delay: stagger(0.05),
          duration: 0.2,
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-3xl font-bold text-center flex flex-wrap justify-center",
        className
      )}
      ref={scope}
    >
      {wordsArray.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.text.map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              className={cn(
                "char opacity-0 transition-opacity duration-300 dark:text-white text-black",
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 ml-1",
          cursorClassName
        )}
      />
    </div>
  );
};
