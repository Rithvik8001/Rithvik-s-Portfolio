import React from "react";

export default function DotBackgroundDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-fit w-full dark:bg-black bg-white -z-10 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {children}
    </div>
  );
}
