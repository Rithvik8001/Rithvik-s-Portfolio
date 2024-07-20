"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import demo from "@/../public/demo.png";
import { MdOutlineOpenInNew } from "react-icons/md";
import BoxReveal from "@/components/magicui/box-reveal";
import ShineBorder from "@/components/magicui/shine-border";

export default function ExpandableCardDemo() {
  return (
    <>
      <div className="flex flex-col gap-6 items-center">
        {cards.map((card) => (
          <article
            key={card.title}
            className="duration-600 overflow-hidden border transition-all ease-in-out hover:bg-gradient-to-b hover:shadow-xl"
          >
            <BoxReveal key={card.title} boxColor={"#5046e6"} duration={1}>
              <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                <div className="rounded-lg z-20 bg-transparent bg-cover px-6 py-2">
                  <div className="bg-red mt-4">
                    <div className="">
                      <h2 className="mb-2 text-xl font-semibold dark:text-slate-200">
                        Simply Cook
                      </h2>
                      <p className="text-gray-600 dark:text-[#A5B0B7]">
                        Recipe finder app which let&apos;s user to find recipes
                        and check the ingredients. User can get recipes details
                        from a huge collection of 2.3M recipes.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-md border-[0.5px] border-slate-300 bg-slate-300/20 py-1 px-2 text-xs text-gray-600 dark:border-slate-800 dark:bg-[#272B2F] dark:text-[#D4D4D8]">
                          NextJS
                        </span>
                        <span className="rounded-md border-[0.5px] border-slate-300 bg-slate-300/20 py-1 px-2 text-xs text-gray-600 dark:border-slate-800 dark:bg-[#272B2F] dark:text-[#D4D4D8]">
                          React
                        </span>
                        <span className="rounded-md border-[0.5px] border-slate-300 bg-slate-300/20 py-1 px-2 text-xs text-gray-600 dark:border-slate-800 dark:bg-[#272B2F] dark:text-[#D4D4D8]">
                          JavaScript
                        </span>
                        <span className="rounded-md border-[0.5px] border-slate-300 bg-slate-300/20 py-1 px-2 text-xs text-gray-600 dark:border-slate-800 dark:bg-[#272B2F] dark:text-[#D4D4D8]">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                    <div className="my-4 flex  justify-between py-2">
                      <motion.a
                        target="_blank"
                        className="text-semibold hover:shadow-2xl border-px group flex items-center gap-x-1 rounded-full border-blue-400 bg-slate-800 p-2 px-4 text-white duration-300 hover:scale-105 active:scale-95 dark:bg-slate-100 dark:text-slate-900"
                        href="https://simply-cook.vercel.app/"
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
                        href="https://github.com/RakeshSangem/simply-cook"
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
            </BoxReveal>
          </article>
        ))}
      </div>
    </>
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

const cards = [
  {
    description: "Lorem Ipsum1",
    title: "Lorem Ipsum1",
    src: { demo },
    ctaText: "Visit",
    ctaLink: "/",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos perferendis corporis, pariatur labore incidunt reprehenderit nihil necessitatibus, quaerat dicta quas dolores? Adipisci, veniam harum debitis obcaecati eligendi temporibus ad. Quisquam debitis possimus excepturi perspiciatis tempora natus nostrum repudiandae accusamus! Cumque velit aliquid labore iure excepturi fuga deleniti nam impedit. Porro vitae officia unde nobis expedita dolorem qui neque? Molestias! Laborum laboriosam tenetur iusto aliquam adipisci perferendis officia quia tempore incidunt illum, molestiae veritatis voluptate, quae dolorem exercitationem, ipsa accusamus labore rerum! Voluptatem amet autem, fugiat voluptatibus quasi ea suscipit!",
  },
  {
    description: "Lorem Ipsum2",
    title: "Lorem Ipsum2",
    src: { demo },
    ctaText: "Visit",
    ctaLink: "/",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos perferendis corporis, pariatur labore incidunt reprehenderit nihil necessitatibus, quaerat dicta quas dolores? Adipisci, veniam harum debitis obcaecati eligendi temporibus ad. Quisquam debitis possimus excepturi perspiciatis tempora natus nostrum repudiandae accusamus! Cumque velit aliquid labore iure excepturi fuga deleniti nam impedit. Porro vitae officia unde nobis expedita dolorem qui neque? Molestias! Laborum laboriosam tenetur iusto aliquam adipisci perferendis officia quia tempore incidunt illum, molestiae veritatis voluptate, quae dolorem exercitationem, ipsa accusamus labore rerum! Voluptatem amet autem, fugiat voluptatibus quasi ea suscipit!",
  },
  {
    description: "Lorem Ipsum3",
    title: "Lorem Ipsum3",
    src: { demo },
    ctaText: "Visit",
    ctaLink: "/",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos perferendis corporis, pariatur labore incidunt reprehenderit nihil necessitatibus, quaerat dicta quas dolores? Adipisci, veniam harum debitis obcaecati eligendi temporibus ad. Quisquam debitis possimus excepturi perspiciatis tempora natus nostrum repudiandae accusamus! Cumque velit aliquid labore iure excepturi fuga deleniti nam impedit. Porro vitae officia unde nobis expedita dolorem qui neque? Molestias! Laborum laboriosam tenetur iusto aliquam adipisci perferendis officia quia tempore incidunt illum, molestiae veritatis voluptate, quae dolorem exercitationem, ipsa accusamus labore rerum! Voluptatem amet autem, fugiat voluptatibus quasi ea suscipit!",
  },
  {
    description: "Lorem Ipsum4",
    title: "Lorem Ipsum4",
    src: { demo },
    ctaText: "Visit",
    ctaLink: "/",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos perferendis corporis, pariatur labore incidunt reprehenderit nihil necessitatibus, quaerat dicta quas dolores? Adipisci, veniam harum debitis obcaecati eligendi temporibus ad. Quisquam debitis possimus excepturi perspiciatis tempora natus nostrum repudiandae accusamus! Cumque velit aliquid labore iure excepturi fuga deleniti nam impedit. Porro vitae officia unde nobis expedita dolorem qui neque? Molestias! Laborum laboriosam tenetur iusto aliquam adipisci perferendis officia quia tempore incidunt illum, molestiae veritatis voluptate, quae dolorem exercitationem, ipsa accusamus labore rerum! Voluptatem amet autem, fugiat voluptatibus quasi ea suscipit!",
  },
  {
    description: "Lorem Ipsum5",
    title: "Lorem Ipsum5",
    src: { demo },
    ctaText: "Visit",
    ctaLink: "/",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos perferendis corporis, pariatur labore incidunt reprehenderit nihil necessitatibus, quaerat dicta quas dolores? Adipisci, veniam harum debitis obcaecati eligendi temporibus ad. Quisquam debitis possimus excepturi perspiciatis tempora natus nostrum repudiandae accusamus! Cumque velit aliquid labore iure excepturi fuga deleniti nam impedit. Porro vitae officia unde nobis expedita dolorem qui neque? Molestias! Laborum laboriosam tenetur iusto aliquam adipisci perferendis officia quia tempore incidunt illum, molestiae veritatis voluptate, quae dolorem exercitationem, ipsa accusamus labore rerum! Voluptatem amet autem, fugiat voluptatibus quasi ea suscipit!",
  },
  {
    description: "Lorem Ipsum6",
    title: "Lorem Ipsum6",
    src: { demo },
    ctaText: "Visit",
    ctaLink: "/",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos perferendis corporis, pariatur labore incidunt reprehenderit nihil necessitatibus, quaerat dicta quas dolores? Adipisci, veniam harum debitis obcaecati eligendi temporibus ad. Quisquam debitis possimus excepturi perspiciatis tempora natus nostrum repudiandae accusamus! Cumque velit aliquid labore iure excepturi fuga deleniti nam impedit. Porro vitae officia unde nobis expedita dolorem qui neque? Molestias! Laborum laboriosam tenetur iusto aliquam adipisci perferendis officia quia tempore incidunt illum, molestiae veritatis voluptate, quae dolorem exercitationem, ipsa accusamus labore rerum! Voluptatem amet autem, fugiat voluptatibus quasi ea suscipit!",
  },
];
