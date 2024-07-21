"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import demo from "@/../public/demo.png";
import { MdOutlineOpenInNew } from "react-icons/md";
import BoxReveal from "@/components/magicui/box-reveal";
import ShineBorder from "@/components/magicui/shine-border";
import cards from "@/data/projects";

export default function ExpandableCardDemo() {
  return (
    <div className="max-w-5xl flex flex-col mx-auto">
      <div className="flex flex-col items-center">
        {cards.slice(0, 2).map((card: any) => (
          <BoxReveal key={card.title} boxColor={"#5046e6"} duration={1}>
            <div key={card.title}>
              <div
                key={`card-${card.title}`}
                className="p-4 flex w-full max-w-[70rem] justify-center flex-col md:flex-row items-center dark:hover:bg-neutral-800 rounded-xl"
              >
                <ShineBorder
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  className="border"
                >
                  <div className="z-20 rounded-lg bg-transparent bg-cover px-6 py-2">
                    <div className=" mt-4">
                      <div className="">
                        <h2 className="mb-2 text-xl font-semibold dark:text-slate-200">
                          {card.title}
                        </h2>
                        <p className="text-gray-600 dark:text-[#A5B0B7]">
                          {card.content}.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {card.tech.map((tech: string) => (
                            <span
                              key={tech}
                              className="rounded-md border-[0.5px] border-slate-300 bg-slate-300/20 py-1 px-2 text-xs text-gray-600 dark:border-slate-800 dark:bg-[#272B2F] dark:text-[#D4D4D8]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="my-4 flex justify-between py-2">
                        <motion.a
                          target="_blank"
                          className="text-semibold hover:shadow-2xl border-px group flex items-center gap-x-1 rounded-full border-blue-400 bg-slate-800 p-2 px-4 text-white duration-300 hover:scale-105 active:scale-95 dark:bg-slate-100 dark:text-slate-900"
                          href={card.liveLink}
                          whileHover={{
                            y: -5,
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                          }}
                          transition={{ type: "spring", stiffness: 800 }}
                        >
                          Live
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="h-4 w-4 transition-transform group-hover/button:translate-x-px group-hover:-translate-y-px group-hover:translate-x-px"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17 7L7 17M8 7h9v9"></path>
                          </svg>
                        </motion.a>
                        <a
                          target="_blank"
                          className="text-semibold border-px group flex items-center gap-x-1 rounded-full border-blue-400 bg-gray-100/40 p-2 px-4 text-gray-700 duration-300 hover:scale-105 hover:bg-slate-200 active:scale-95 dark:bg-gray-800 dark:text-slate-100"
                          href={card.github}
                        >
                          GitHub
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="h-4 w-4 transition-transform group-hover/button:translate-x-px group-hover:-translate-y-px group-hover:translate-x-px"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17 7L7 17M8 7h9v9"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </ShineBorder>
              </div>
            </div>
          </BoxReveal>
        ))}
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
