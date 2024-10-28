import Cards from "@/components/Cards";
import BlurFade from "@/components/magicui/blur-fade";

export default function page() {
  return (
    <section className="px-6 lg:px-20 mx-auto max-w-[110rem] mt-16">
      <BlurFade delay={0.25} inView>
        <h3 className="text-7xl md:text-center font-bold">
          About me<span className="text-c-violet">.</span>
        </h3>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <div className="max-w-4xl mx-auto space-y-4 mt-14">
          <p className="text-gray-700 text-xl">
           Hi, this is Rithvik. I am a Computer Science graduate and a self-taught web developer specializing in creating web applications. I leverage my technical expertise to solve complex problems and would love the opportunity to showcase and enhance my skills.
          </p>
        </div>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <div className="max-w-4xl mx-auto space-y-4 mt-14">
          <p className="text-gray-700 text-xl">
           My journey began with the basics of HTML, CSS, and JavaScript, which laid a strong foundation for my frontend development skills. Over time, I have expanded my expertise to include modern frameworks and libraries such as React. I am also currently learning Next.js and Tailwind CSS.{" "}
          </p>
        </div>
      </BlurFade>
      <BlurFade delay={0.55} inView>
        <div className="max-w-4xl mx-auto space-y-4 mt-14">
          <p className="text-gray-700 text-xl">
           When I'm not coding, I love to watch football ⚽️. You could call me a football fanatic—I started watching this beautiful sport when I was 16 years old, and my favorite club is the biggest in England, Manchester United!
          </p>
        </div>
      </BlurFade>
      <BlurFade delay={0.65} inView>
        <div className="max-w-4xl mx-auto space-y-4 mt-14">
          <p className="text-gray-700 text-xl">
           My goal is to leverage my skills and knowledge to create impactful web applications that solve real-world problems. I am excited about opportunities in frontend development and look forward to collaborating with like-minded professionals to build innovative solutions.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
