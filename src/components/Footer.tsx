import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" mt-24 bg-stone-50">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-around">
          <div className="mb-10 md:mb-0 mt-10">
            <Link href="/contact">
              <span className="self-center bg-c-violet rounded-lg py-4 px-6 hover:bg-indigo-700 duration-150 font-semibold whitespace-nowrap text-gray-100">
                {" "}
                Wanna Talk?{" "}
                <span aria-hidden="true" className="pl-2">
                  &rarr;
                </span>{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-col justify-end text-gray-400/80">
            <h4 className=" uppercase font-semibold mb-5">Pages:</h4>
            <div className="grid grid-cols-2 gap-8 sm:gap-28 sm:grid-cols-2">
              <div className="flex items-center ">
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/projects" className="hover:underline">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Rithvik Pallamreddy. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 items-center sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/in/rithvik-pallamreddy-9bb62b249/"
              target="_blank"
            >
              <FaLinkedin size={29} />
            </a>
            <a
              className="fill-gray-500"
              href="https://github.com/Rithvik8001"
              target="_blank"
            >
              <FaGithubSquare size={29} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
