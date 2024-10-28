import { FaCheck } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";

export default function Experience() {
  return (
    <section className="text-gray-600 mt-20 px-3 body-font">
      <BlurFade delay={0.25} inView>
        <h2 className="md:text-7xl text-5xl text-gray-950 md:text-center font-bold">
          Experience<span className="text-c-violet">.</span>
        </h2>
      </BlurFade>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <BlurFade delay={0.5} inView>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-c-violet text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Tata Consultancy Services
                </h2>
                <span className="text-gray-700">
                  Systems Engineer, June’21 to July’22
                </span>
                <ul className="flex text-xl mt-5 flex-col gap-3">
                  <li className="flex gap-5">
                    <FaCheck size={20} fill="#6e06f2" /> Developed and maintained web applications using React Js.Collaborated with the design team to implement responsive and
user-friendly interfaces.
                  </li>
                  <li className="flex gap-5">
                    <FaCheck size={20} fill="#6e06f2" />
                     Implemented form validation and error handling to improve user
experience
                  </li>
                  <li className="flex gap-5">
                    <FaCheck size={20} fill="#6e06f2" />
                    Optimized web application performance by implementing lazy
loading, code splitting, and minimizing unnecessary re-renders.
                  </li>
                  <li className="flex gap-5">
                    <FaCheck size={20} fill="#6e06f2" />
                    Contributed to improving the website's SEO by ensuring clean and
semantic HTML markup and optimizing page load speeds.
                  </li>
                </ul>
              </div>
            </div>
          </BlurFade>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <BlurFade delay={1} inView>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-c-violet text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Elorce
                </h2>
                <span className="text-gray-700">Intern, Jan’21 to Apr’21</span>
                <ul className="flex mt-5 text-xl flex-col gap-3">
                  <li className="flex gap-5">
                    <FaCheck size={20} fill="#6e06f2" />Assisted in developing responsive web pages using HTML, CSS,
and JavaScript, ensuring compatibility across various devices and
browsers.
                  </li>
                  <li className="flex gap-5">
                    <FaCheck size={20} fill="#6e06f2" />
                    Learnt the UI Technologies like Html, css and Javascript.
                  </li>
                  <li className="flex gap-5">
                    <FaCheck size={20} fill="#6e06f2" />
                    Documented codebase changes and new features, creating and
updating README files, API documentation, for teams use.
                  </li>
                  <li className="flex gap-5">
                    <FaCheck size={20} fill="#6e06f2" />
                    Participated in the integration of third-party libraries and
tools, such as charting libraries, form validation tools, and
authentication services, to extend application functionality.
                  </li>
                </ul>
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <BlurFade delay={1.5} inView>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-c-violet text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Tata Consultancy Services
                </h2>
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
                    Prepared a playbook analyzing As-is process and multiple use
                    cases involved in floating a project.
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
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
