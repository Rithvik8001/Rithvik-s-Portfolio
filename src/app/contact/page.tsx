import EmailForm from "@/components/Form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import BlurFade from "@/components/magicui/blur-fade";

export default function page() {
  return (
    <section className="mx-auto px-4 min-h-[60dvh] max-w-[120rem] mt-16">
      <BlurFade delay={0.25} inView>
        <h1 className="text-7xl md:text-center font-bold">
          Contact me<span className="text-c-violet">.</span>
        </h1>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Card className="max-w-2xl mt-12 mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Ask me anything</CardTitle>
            <CardDescription className="mt-2 text-lg">
              I'm open to hearing about new opportunities and collaborations.
              Feel free to ask your doubts, questions, or just say hi.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmailForm />
          </CardContent>
        </Card>
      </BlurFade>
    </section>
  );
}
