import { HoverEffect } from "./ui/card-hover-effect";
import globe from "@/../public/globe.svg";
import type { StaticImageData } from "next/image";
 
export default function Cards() {
  return (
    <div className=" py-10">
        <div className=" mx-auto">
        <HoverEffect items={projects} />
        </div>
    </div>
  );
}
const projects = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/portfolio",
    image: globe,
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/portfolio",
    image: globe,
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/portfolio",
    image: globe,
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/portfolio",
    image: globe,
  },
];