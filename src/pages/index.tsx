import { type NextPage } from "next";
import Head from "next/head";
import ExpandReveale from "~/components/ExpandReveale";
import GlowHoverButton from "~/components/GlowHoverButton";
import GrowArrow from "~/components/GrowArrow";
import PassLine from "~/components/PassLine";
import Item from "~/layouts/Item";
import Navbar from "~/layouts/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Sandbox</title>
        <meta name="description" content="The Sandbox" />
        <link rel="icon" href="/pixil-frame-0-_2_.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="fixed inset-0 -z-50 bg-[url(https://play.tailwindcss.com/img/beams.jpg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:hidden"></div>
        <h1 className="mb-[30vh] mt-[37vh] bg-gradient-to-t from-sky-500 to-blue-600 bg-clip-text text-center text-5xl font-semibold text-transparent dark:from-sky-500 dark:to-sky-800 sm:text-7xl xl:text-8xl min-[1700px]:text-9xl">
          The Sandbox
        </h1>
        <div className="flex flex-wrap p-2.5">
          <Item>
            <GrowArrow />
          </Item>
          <Item>
            <GlowHoverButton />
          </Item>
          <Item>
            <ExpandReveale
              text="Hovering Over View Expand Revealing"
              initialValue={0.25}
              interval={0.03}
              translateXForFirstWord="15rem"
              translateXForSecondWord="6.93rem"
              translateXForThirdWord="3.03rem"
              translateXForFourthWord="-0.75rem"
              translateXForFifthWord="-7.07rem"
            />
          </Item>
          <Item>
            <PassLine />
          </Item>
          <Item>-</Item>
          <Item>-</Item>
          <Item>-</Item>
          <Item>-</Item>
          <Item>-</Item>
          <Item>-</Item>
          <Item>-</Item>
          <Item>-</Item>
        </div>
      </main>
    </>
  );
};

export default Home;
