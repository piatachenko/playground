import React, { useEffect, useRef } from "react";

export default function GlowHoverButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      const handlePointerMove = (e: PointerEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        button.style.setProperty("--x", x.toString() + "px");
        button.style.setProperty("--y", y.toString() + "px");
      };
      button.addEventListener("pointermove", handlePointerMove);
      return () => {
        button.removeEventListener("pointermove", handlePointerMove);
      };
    }
  }, [buttonRef]);
  return (
    <>
      <button
        ref={buttonRef}
        className="relative overflow-hidden rounded-2xl border-[3px] border-sky-300 bg-sky-200 px-10 py-7 text-2xl font-semibold text-neutral-800 shadow-md transition-all after:absolute after:-left-[3.5rem] after:-top-[3.5rem] after:h-28 after:w-28 after:translate-x-[--x] after:translate-y-[--y] after:rounded-full after:bg-sky-500/25 after:opacity-0 after:blur-[29px] after:transition-[opacity] after:duration-[.4s] after:content-[''] hover:after:opacity-100 focus:ring focus:ring-blue-500 dark:border-[#441273] dark:bg-[#1f003e] dark:text-neutral-300 dark:shadow-[#101010] dark:after:bg-violet-800/25 dark:focus:ring-violet-500"
      >
        Glowing Hover Button
      </button>
    </>
  );
}
