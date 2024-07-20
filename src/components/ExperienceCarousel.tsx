import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FaCheck } from "react-icons/fa";

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <div className="flex flex-col gap-3 aspect-square items-center justify-center p-6">
              <span className="text-xl text-c-violet font-semibold">
                Tata Consultancy Services
              </span>
              <span className="text-sm text-gray-600">
                Systems Engineer, June’21 to July’22
              </span>
              <ul className="flex flex-col text-xl gap-3">
                <li className="flex gap-5">
                  <FaCheck size={50} fill="#6e06f2" /> Played a key role in bug
                  fixation and enhancement of user experience of client website.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={50} fill="#6e06f2" />
                  Part of the team which developed login functionality using
                  mobile number with otp authentication.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={50} fill="#6e06f2" />
                  Reduced transaction failure of payment gateway by creating
                  unique token identifiers for every transaction.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={50} fill="#6e06f2" />
                  Conceived and built optimized landing pages in HTML and CSS
                  for integration and cross browser compatibility
                </li>
              </ul>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <div className="flex flex-col gap-3 aspect-square items-center justify-center p-6">
              <span className="text-xl text-c-violet font-semibold">
                Elorce
              </span>
              <span className="text-sm text-gray-600">
                Intern, Jan’21 to Apr’21
              </span>
              <ul className="flex flex-col text-xl gap-3">
                <li className="flex gap-5">
                  <FaCheck size={50} fill="#6e06f2" />
                  Developed User Interfaces using Html, Css, Javascript. Used Ux
                  tools like Figma to design the websites.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={30} fill="#6e06f2" />
                  Learnt the UI Technologies like Html, css and Javascript.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={40} fill="#6e06f2" />
                  Documented project changes in team manuals for future
                  reference and use.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={40} fill="#6e06f2" />
                  Developed user friendly web forms with validation and error
                  handling.
                </li>
              </ul>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <div className="flex flex-col gap-3 aspect-square items-center justify-center p-6">
              <span className="text-xl text-c-violet font-semibold">
                Tata Consultancy Services
              </span>
              <span className="text-sm text-gray-600">
                {" "}
                Intern, Aug 2020 to Nov 2020
              </span>
              <ul className="flex flex-col text-xl gap-3">
                <li className="flex gap-5">
                  <FaCheck size={40} fill="#6e06f2" /> Worked on a project
                  called Automation of Engineering Bill Preparation
                </li>
                <li className="flex gap-5">
                  <FaCheck size={60} fill="#6e06f2" />
                  Prepared a playbook analyzing As-is process and multiple use
                  cases involved in floating a project.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={40} fill="#6e06f2" />
                  Learnt the basics of SQL, Oracle application framework
                </li>
                <li className="flex gap-5">
                  <FaCheck size={40} fill="#6e06f2" />
                  Created SQL tables, Stored Procedures, triggers and functions
                </li>
              </ul>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
