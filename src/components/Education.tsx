import BlurFade from "@/components/magicui/blur-fade";

export default function Education() {
  return (
    <div className="px-6 lg:px-20 mx-auto max-w-[110rem] mt-16">
      <BlurFade delay={0.25} inView>
        <h3 className="md:text-7xl text-6xl md:text-center font-bold">
          Education<span className="text-c-violet">.</span>
        </h3>
      </BlurFade>
      <div className="flex flex-col justify-center gap-20 lg:flex-row mt-12">
        <BlurFade delay={0.5} inView>
          <div className="max-w-4xl bg-gray-100 p-14 flex flex-col gap-3">
            <h3 className="font-semibold text-2xl">
              Masters in Computer Science
            </h3>
            <h4 className="text-gray-600">
              Wichita State University, Aug’22 to Dec’23
            </h4>
            <h6 className="text-gray-600">Cgpa: 3.9 / 4.0</h6>
          </div>
        </BlurFade>
        <BlurFade delay={0.8} inView>
          <div className="max-w-4xl bg-gray-100 p-14 flex flex-col gap-3">
            <h3 className="font-semibold text-2xl">B.Tech Computer Science</h3>
            <h4 className="text-gray-600">
              Sastra Deemed to be University, June’17 to May’21
            </h4>
            <h6 className="text-gray-600">Cgpa: 7.0</h6>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
