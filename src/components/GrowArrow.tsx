import React from "react";

export default function GrowArrow() {
  return (
    <>
      <div className="group relative flex items-center text-3xl font-semibold transition-all duration-[.4s] after:absolute after:-bottom-1 after:left-[.1rem] after:h-0.5 after:w-full after:origin-left after:scale-x-[.94] after:bg-neutral-800 after:transition-all after:duration-[.4s] after:content-[''] hover:cursor-pointer dark:after:bg-neutral-300 dark:hover:after:bg-green-500 hover:after:bg-green-500">
        <p className="transition-all duration-[.4s] group-hover:text-green-500">
          Growing Arrow
        </p>
        <div className="mt-1.5 flex items-center">
          <div className="-mr-5 ml-2 h-[.2rem] w-2 origin-right translate-y-[0.015rem] scale-x-0 bg-neutral-800 opacity-0 transition-all duration-[.4s] group-hover:w-5 group-hover:scale-x-100 group-hover:bg-green-500 group-hover:opacity-100 dark:bg-neutral-300"></div>
          <div className="transition-all duration-[.4s] group-hover:fill-green-500">
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
