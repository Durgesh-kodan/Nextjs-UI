"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-black text-neutral-600 dark:text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-y-6 min-h-[400px]">
        <h1 className=" text-3xl font-bold">Durgesh</h1>
        {/* © Text */}
        <p className="text-base sm:text-lg">
          © 2025 Durgesh. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-4 text-sm sm:text-base">
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-bold text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
              GitHub{" "}
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-bold text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
              LinkedIn{" "}
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-bold text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
              GMAIL{" "}
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
          
        </div>
        
      </div>
     
    </footer>
  );
}
