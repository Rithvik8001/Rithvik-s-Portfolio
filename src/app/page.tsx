import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import Skills from "@/components/Skills";
import ExperienceTabs from "@/components/ExperienceTabs";
import Button from "@/components/Button";
import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <main className="min-h-[60vh]">
      <Hero />
      <div className="px-4 mt-20 flex flex-col items-center">
        <BlurFade delay={0.25} inView>
          <h3 className="md:text-7xl text-5xl px mt-20 md:text-center font-bold">
            About me<span className="text-c-violet">.</span>
          </h3>
          <div className="max-w-4xl mx-auto space-y-4 mt-14">
            <p className="text-gray-700 text-xl">
             Hi, this is Rithvik. I am a Computer Science graduate and a self-taught web developer specializing in creating web applications. I leverage my technical expertise to solve complex problems and would love the opportunity to showcase and enhance my skills.
            </p>
          </div>
        </BlurFade>
      </div>
      <BlurFade delay={0.25} inView>
        <ExperienceTabs />
      </BlurFade>

      <div className="mt-24">
        <BlurFade delay={0.5} inView>
          <h2 className="text-5xl md:text-7xl px-4 md:text-center mb-7 font-bold">
            Projects<span className="text-c-violet">.</span>
          </h2>
        </BlurFade>
        <ProjectsPreview />
        <div className="flex justify-center mt-4">
          <Button path="/projects">View all projects</Button>
        </div>
      </div>
      <Skills />
    </main>
  );
}
