import React, { type ReactNode } from "react";

interface ItemProps {
  children: ReactNode;
}

export default function Item({ children }: ItemProps) {
  return (
    <div className="basis-full overflow-auto lg:basis-1/2 2xl:basis-1/3">
      <div className="m-2.5 flex min-h-[20rem] flex-wrap items-center justify-center overflow-auto rounded-2xl border-2 border-neutral-200 bg-neutral-100/40 p-5 backdrop-blur-md hover:scale-[1.005] hover:border-neutral-300 hover:transition-[border,transform] hover:duration-[.25s] dark:border-neutral-900 dark:bg-[#0c0c0c]/50 dark:hover:border-neutral-800">
        {children}
      </div>
    </div>
  );
}
