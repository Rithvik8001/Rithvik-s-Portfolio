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
            <h3 className="font-semibold text-2xl">Lorem Ipsum</h3>
            <p className="text-gray-700 text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, debitis saepe quasi reprehenderit qui cumque aliquid,
              iste officiis voluptate, odit odio quod? Porro iusto commodi
              quisquam non soluta hic nam. Necessitatibus nam minus iure laborum
              suscipit, id facilis blanditiis consequuntur deserunt maiores
              soluta repellat rerum mollitia autem dolorum delectus porro natus
              recusandae ex labore eligendi earum voluptas dolore? Numquam,
              doloribus?
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
