import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head />
      <body className="bg-white bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-fixed fill-neutral-800 font-['Source_Sans_Pro'] text-neutral-800 selection:bg-indigo-500 selection:text-neutral-300 dark:bg-[#050505] dark:fill-neutral-300 dark:text-neutral-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
