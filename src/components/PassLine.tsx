import React from "react";

export default function PassLine() {
  return (
    <>
      <div className="relative inline-block pb-1.5 text-3xl font-semibold text-neutral-800 transition-all duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:translate-x-[0.05rem] after:bg-neutral-800 after:transition-all after:duration-300 after:content-[''] hover:cursor-pointer hover:after:left-0 hover:after:right-auto hover:after:w-full active:tracking-wide dark:text-neutral-300 dark:after:bg-neutral-300">
        Passing Line
      </div>
    </>
  );
}
