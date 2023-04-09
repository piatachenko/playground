import React, { useEffect, useState } from "react";

export default function ThemeToogle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  function handleThemeSwitch() {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  }
  return (
    <>
      <button className="ml-auto mr-10" onClick={handleThemeSwitch}>
        <span className="hidden dark:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
            <path d="M6.343 17.657l-1.414 1.414"></path>
            <path d="M6.343 6.343l-1.414 -1.414"></path>
            <path d="M17.657 6.343l1.414 -1.414"></path>
            <path d="M17.657 17.657l1.414 1.414"></path>
            <path d="M4 12h-2"></path>
            <path d="M12 4v-2"></path>
            <path d="M20 12h2"></path>
            <path d="M12 20v2"></path>
          </svg>
        </span>
        <span className="dark:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
            <path d="M19 11h2m-1 -1v2"></path>
          </svg>
        </span>
      </button>
    </>
  );
}
