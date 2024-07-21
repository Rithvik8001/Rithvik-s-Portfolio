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
      <BlurFade delay={0.25} inView>
        <div className="max-w-4xl mx-auto space-y-4 mt-14">
          <p className="text-gray-700 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus, debitis saepe quasi reprehenderit qui cumque aliquid,
            iste officiis voluptate, odit odio quod? Porro iusto commodi
            quisquam non soluta hic nam. Necessitatibus nam minus iure laborum
            suscipit, id facilis blanditiis consequuntur deserunt maiores soluta
            repellat rerum mollitia autem dolorum delectus porro natus
            recusandae ex labore eligendi earum voluptas dolore? Numquam,
            doloribus?
          </p>
        </div>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <div className="max-w-4xl mx-auto space-y-4 mt-14">
          <p className="text-gray-700 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus, debitis saepe quasi reprehenderit qui cumque aliquid,
            iste officiis voluptate, odit odio quod? Porro iusto commodi
            quisquam non soluta hic nam. Necessitatibus nam minus iure laborum
            suscipit, id facilis blanditiis consequuntur deserunt maiores soluta
            repellat rerum mollitia autem dolorum delectus porro natus
            recusandae ex labore eligendi earum voluptas dolore? Numquam,
            doloribus?
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
