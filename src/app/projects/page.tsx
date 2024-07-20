import Button from "@/components/Button";
import Cards from "@/components/Cards";
import Projects from "@/components/Projects";

export default function page() {
  return (
    <section className="px-3">
      <h1 className="text-7xl md:text-center mt-9 mb-11 font-bold">
        Projects<span className="text-c-violet">.</span>
      </h1>
      <Projects />
      <div className="flex justify-center mt-10">
        <Button path="/projects">Explore more</Button>
      </div>
    </section>
  );
}
