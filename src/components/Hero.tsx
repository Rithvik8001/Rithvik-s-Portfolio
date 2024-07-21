import Image from "next/image";
import icon1 from '@/../public/icon.png'
import Link from "next/link";
import BlurIn from "@/components/magicui/blur-in";
import Button from "./Button";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";
import AnimateLetter from "@/components/ui/animateLetter";
import wave from '@/../public/wave.svg'


export default function Hero() {
  return (
    <div id="hero" className="px-6 lg:px-20">
        <section className="flex flex-col gap-2 items-center max-w-[130rem] mx-auto mt-12 justify-between">
            <div className="flex flex-col items-center">
            <BlurFade delay={0.25} inView>
                <Image className="w-44 md:w-48" src={icon1} alt="hero" width={500} height={500} />
            </BlurFade>
            </div>
            <BlurFade delay={0.5} inView>
            <div className="flex flex-col lg:items-center gap-3">
              <div className="w-fit md:text-3xl lg:mx-auto flex gap-2">
              <h1 className='text-3xl text-gray-600' >Hi, I&apos;m Rithvik</h1>
              <Image alt="" height={30} width={30} src={wave} />
              </div>
              <div className="flex flex-wrap lg:justify-center">
                <h1 className="text-6xl lg:hidden lg:text-center lg:text-8xl xl:text-9xl w-fit font-bold max-w-3xl" ><span className="text-c-violet">Frontend</span> Developer</h1>
                <AnimateLetter color="black" className="text-6xl text-c-violet hidden lg:block lg:text-center mr-10 lg:text-8xl xl:text-9xl w-fit font-bold max-w-3xl" >Frontend</AnimateLetter>
                <AnimateLetter className="text-6xl hidden lg:block lg:text-center lg:text-8xl xl:text-9xl w-fit font-bold max-w-3xl" >Developer</AnimateLetter>
                </div>
                <BlurFade delay={0.25} inView>
                  <p className="text-gray-500 max-w-2xl text-lg mt-4 lg:text-center">Passionate Frontend Developer, Who has an eye for design and a mind for development. I love building things and helping people. </p>
                </BlurFade>
            </div>
            </BlurFade>
        </section>
      <div className="flex mt-8 lg:items-center justify-center gap-6 lg:gap-4 flex-col">
          <BlurFade delay={0.5} inView>
            <Button target='_blank' path="/projects">Resume</Button>
          </BlurFade>
         <BlurFade delay={0.25} inView>
         <div className="flex gap-5 mt-4">
            <Link target="_blank" href='https://www.linkedin.com/in/rithvik-pallamreddy-9bb62b249/'><FaLinkedin size={40} /></Link>
            <Link target='_blank' href='https://github.com/Rithvik8001'><FaGithub size={40} /></Link>
         </div>
         </BlurFade>
      </div>
    </div>
  )    
}