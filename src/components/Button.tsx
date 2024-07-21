import Link from "next/link";


export default function Button({children, path, target} : {children: string | React.ReactNode, path: string, target?: string}) {
  return (
    <Link target={target} href={path} className="px-8 py-2 rounded-full bg-c-violet focus:ring-2 focus:ring-blue-400 hover:shadow-xl text-white w-fit transition duration-200">
        {children}
    </Link>
  )
}