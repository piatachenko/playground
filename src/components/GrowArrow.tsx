import React from "react";

export default function GrowArrow() {
  return (
    <>
      <div className="group relative flex select-none items-center pb-1 text-3xl font-semibold transition-all duration-[.4s] after:absolute after:bottom-0 after:left-[.1rem] after:h-0.5 after:w-full after:origin-left after:scale-x-[.94] after:bg-neutral-800 after:transition-all after:duration-[.4s] after:content-[''] hover:cursor-pointer hover:after:bg-green-500 dark:after:bg-neutral-300 dark:hover:after:bg-green-500">
        <p className="text-neutral-800 transition-all duration-[.4s]  group-hover:text-green-500 dark:text-neutral-300">
          Growing Arrow
        </p>
        <div className="mt-1.5 flex items-center">
          <div className="-mr-[1.15rem] ml-2 h-[.1rem] scale-y-[1.7] translate-y-[.04rem] w-2 bg-neutral-800 opacity-0 transition-all duration-[.4s] group-hover:w-5 group-hover:bg-green-500 group-hover:opacity-100 group-active:w-3 dark:bg-neutral-300"></div>
          <div className="fill-neutral-800 transition-all duration-[.4s] group-hover:fill-green-500 dark:fill-neutral-300">
            <svg
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
