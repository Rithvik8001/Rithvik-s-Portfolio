import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "react",
  "nextdotjs",
  'visualstudiocode',
  'github',
  'typescript',
  "html5",
  'css3',
  'javascript',
  'tailwindcss',
  'git',
  'postgresql',
  'python'
];

export function IconCloudDemo() {
  return (
    <div className="relative -z-10 flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg px-7 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
