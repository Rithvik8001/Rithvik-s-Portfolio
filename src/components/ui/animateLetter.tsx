'use client'

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"



export default function animateLetter({children, letterClass, className, color='#6e06f2'}: {children:string, letterClass?: string, className?: string, color?: string}) {

        const chars = children.split('')

        return (
            <div className={cn(
                "flex gap-1",
                className
              )}>
        {chars.map((char, index) => (
          <motion.span
            key={index}
            className={cn(
                "inline-block cursor-pointer",
                letterClass
              )}
            whileHover={{ scale: 1.2, color: color }}
            transition={{ type: "spring", stiffness: 800 }}
            
          >
            {char}
          </motion.span>
          ))}
          </div>
        );
}