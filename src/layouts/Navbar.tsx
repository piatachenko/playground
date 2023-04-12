import Link from "next/link";
import ExpandReveale from "~/components/ExpandReveale";
import ThemeToogle from "~/components/ThemeToogle";

export default function Navbar() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-10 flex h-[5.5rem] items-center justify-between bg-gradient-to-b from-white to-transparent px-10 backdrop-blur-md dark:from-[#050505]/70 2xl:h-[6rem] 2xl:px-20 2xl:[&>*]:scale-125">
        <Link href="/">
          <ExpandReveale
            text="The Sandbox"
            initialValue={0.25}
            interval={0.03}
            translateXForSecondWord="-3rem"
          />
        </Link>
        <ThemeToogle />
      </nav>
    </>
  );
}
