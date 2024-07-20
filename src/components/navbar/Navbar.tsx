"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import icon from "@/../public/icon.svg";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navBar, setNavbarActive] = useState(false);

  const pathname = usePathname();

  const navbarHandler = () => {
    setNavbarActive(!navBar);
  };

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  return (
    <div>
      <div className="fixed backdrop-blur-xl md:bg-white/50 inset-x-0 top-0 z-[500] flex items-center justify-between p-6 lg:px-20 xl:px-32">
        <div className="">
          <h2
            onClick={() => setNavbarActive(false)}
            className="text-2xl uppercase tracking-widest font-bold"
          >
            <Link href="/#hero">RP</Link>
          </h2>
        </div>
        <div className="min-w-1.">
          <div className="hidden pl-24 lg:flex lg:gap-x-12">
            {links.map((item) => (
              <Link
                key={item.name}
                onClick={() => setNavbarActive(false)}
                href={item.path}
                className={`text-lg ${
                  pathname === item.path
                    ? "text-indigo-600 font-bold"
                    : "text-gray-500"
                } hover:text-indigo-600 font-semibold leading-6`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <Link
            className="bg-c-violet hover:bg-indigo-700 duration-200 text-gray-100 rounded-lg py-3 px-8"
            href="/contact"
          >
            Get in Touch
          </Link>
        </div>
        <div className="flex cursor-pointer lg:hidden" onClick={navbarHandler}>
          {!navBar ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </div>

      {/* Mobile navbar */}
      <div
        className={`lg:hidden pt-48 z-[100]
          ${
            !navBar
              ? "flex flex-col gap-8 justify-start items-start text-center cursor-pointer absolute left-[-100%] top-0 p-4 transition-all duration-1000 h-screen w-full"
              : "flex flex-col fixed gap-8 justify-start items-center p-3 text-center cursor-pointer left-0 bg-stone-100 font-semibold transition-all duration-1000 h-[100vh] w-full"
          }`}
      >
        <ul>
          {links.map((link, index) => (
            <li
              onClick={() => setNavbarActive(false)}
              key={link.path}
              className="mb-2 w-full text-3xl"
            >
              <Link
                className="hover:text-indigo-600 duration-150"
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          onClick={() => setNavbarActive(false)}
          className="bg-c-violet hover:bg-indigo-700 duration-200 text-gray-100 rounded-lg py-3 px-8"
          href="/contact"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
