"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <section id="project" className="px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-6">PROJECTS</h2>

      {/* Grid layout: tight and responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex justify-center">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-full max-w-sm rounded-xl p-4">
                <CardItem
                  translateZ="40"
                  className="text-lg font-semibold text-neutral-800 dark:text-white"
                >
                  Project #{i + 1}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="50"
                  className="text-neutral-600 text-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to experience the 3D animation effect.
                </CardItem>

                <CardItem translateZ="70" className="w-full mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
                    alt="Project thumbnail"
                    width="1000"
                    height="1000"
                    className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  />
                </CardItem>

                <div className="flex justify-between items-center mt-4">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="#"
                    className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Live Demo →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="text-xs font-medium px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black"
                  >
                    GitHub
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
}
