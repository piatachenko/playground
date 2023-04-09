import ThemeToogle from "~/components/ThemeToogle";

export default function Navbar() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex h-[5.5rem] items-center bg-gradient-to-b from-white to-transparent backdrop-blur-md dark:from-[#050505]/70">
        <ThemeToogle/>
      </nav>
    </>
  );
}
