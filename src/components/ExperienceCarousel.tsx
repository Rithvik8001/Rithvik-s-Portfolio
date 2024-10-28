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
                  <FaCheck size={50} fill="#6e06f2" /> Developed and maintained web applications using React.js.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={50} fill="#6e06f2" />
                  Collaborated with the design team to implement responsive and
user-friendly interfaces.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={50} fill="#6e06f2" />
                 Implemented form validation and error handling to improve user
experience.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={50} fill="#6e06f2" />
                  Optimized web application performance by implementing lazy
loading, code splitting, and minimizing unnecessary re-renders.
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
                  Assisted in developing responsive web pages using HTML, CSS,
and JavaScript, ensuring compatibility across various devices and
browsers.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={30} fill="#6e06f2" />
                  Learnt the UI Technologies like Html, css and Javascript.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={40} fill="#6e06f2" />
                  Documented codebase changes and new features, creating and
updating README files, API documentation, for teams use.
                </li>
                <li className="flex gap-5">
                  <FaCheck size={40} fill="#6e06f2" />
                 Worked on the integration of third-party libraries and
tools, such as charting libraries, form validation tools, and
authentication services, to extend application functionality.
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
