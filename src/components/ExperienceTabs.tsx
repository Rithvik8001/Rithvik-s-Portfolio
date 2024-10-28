"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExperienceCarousel from "@/components/ExperienceCarousel";
import { FaCheck } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function VerticalTabs() {
  return (
    <div className="mt-20">
      <h3 className="md:text-7xl text-5xl pl-3 md:text-center font-bold mb-16">
        Experience<span className="text-c-violet">.</span>
      </h3>
      <div className="lg:hidden flex justify-center">
        <ExperienceCarousel />
      </div>
      <div className="lg:flex hidden justify-center max-w-[100rem] mx-auto">
        <Tabs defaultValue="lorem1">
          <div className="flex lg:gap-11">
            <div className="border-e border-gray-200 dark:border-neutral-700">
              <TabsList>
                <nav
                  className="flex flex-col space-y-2"
                  aria-label="Tabs"
                  role="tablist"
                  data-hs-tabs-vertical="true"
                >
                  <TabsTrigger
                    value="lorem1"
                    className="text-lg hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
                    id="vertical-tab-with-border-item-1"
                    data-hs-tab="#vertical-tab-with-border-1"
                    aria-controls="vertical-tab-with-border-1"
                    role="tab"
                  >
                    Tata Consultancy Services
                  </TabsTrigger>
                  <TabsTrigger
                    value="lorem2"
                    className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-lg whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
                    id="vertical-tab-with-border-item-1"
                    data-hs-tab="#vertical-tab-with-border-1"
                    aria-controls="vertical-tab-with-border-1"
                    role="tab"
                  >
                    Elorce
                  </TabsTrigger>
                  <TabsTrigger
                    value="lorem3"
                    className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-lg whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
                    id="vertical-tab-with-border-item-1"
                    data-hs-tab="#vertical-tab-with-border-1"
                    aria-controls="vertical-tab-with-border-1"
                    role="tab"
                  >
                    Tata Consultancy Services
                  </TabsTrigger>
                </nav>
              </TabsList>
            </div>

            <div className="ms-3">
              <TabsContent
                className="xl:w-[60rem]"
                value="lorem1"
                id="vertical-tab-with-border-1"
                role="tabpanel"
                aria-labelledby="vertical-tab-with-border-item-1"
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-gray-700">
                      Systems Engineer, June’21 to July’22
                    </span>
                    <ul className="flex text-xl mt-5 flex-col gap-3">
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" /> Developed and maintained web applications using Reactjs.
                      </li>
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" />
                        Collaborated with the design team to implement responsive and
user-friendly interfaces.
                      </li>
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" />
                       Implemented form validation and error handling to improve user
experience.
                      </li>
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" />
                        Optimized web application performance by implementing lazy
loading, code splitting, and minimizing unnecessary re-renders.
                      </li>
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
              <TabsContent
                className="w-[60rem]"
                value="lorem2"
                id="vertical-tab-with-border-1"
                role="tabpanel"
                aria-labelledby="vertical-tab-with-border-item-1"
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-gray-700">
                      Intern, Jan’21 to Apr’21
                    </span>
                    <ul className="flex mt-5 text-xl flex-col gap-3">
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" /> Assisted in developing responsive web pages using HTML, CSS,
and JavaScript, ensuring compatibility across various devices and
browsers.
                      </li>
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" />
                        Learnt the UI Technologies like Html, css and
                        Javascript.
                      </li>
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" />
                        Documented codebase changes and new features, creating and
updating README files, API documentation, for teams use.
                      </li>
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" />
                        Worked in the integration of third-party libraries and
tools, such as charting libraries, form validation tools, and
authentication services, to extend application functionality.
                      </li>
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
              <TabsContent
                className="w-[60rem]"
                value="lorem3"
                id="vertical-tab-with-border-1"
                role="tabpanel"
                aria-labelledby="vertical-tab-with-border-item-1"
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-gray-700">
                      Intern, Aug 2020 to Nov 2020
                    </span>
                    <ul className="flex mt-5 text-xl flex-col gap-3">
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" /> Worked on a project
                        called Automation of Engineering Bill Preparation
                      </li>
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" />
                        Prepared a playbook analyzing As-is process and multiple
                        use cases involved in floating a project.
                      </li>
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" />
                        Learnt the basics of SQL, Oracle application framework
                      </li>
                      <li className="flex gap-5">
                        <FaCheck size={20} fill="#6e06f2" />
                        Created SQL tables, Stored Procedures, triggers and
                        functions
                      </li>
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
