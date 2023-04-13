import { CSSProperties } from "react";

interface CustomCSSProperties extends CSSProperties {
  "--delay"?: string;
}

interface ExpandRevealeProps {
  text: string;
  initialValue: number;
  interval: number;
  translateXForFirstWord?: string;
  translateXForSecondWord?: string;
  translateXForThirdWord?: string;
  translateXForFourthWord?: string;
  translateXForFifthWord?: string;
  translateXForSixthWord?: string;
  translateXForSeventhWord?: string;
  translateXForEighthWord?: string;
  translateXForNinthWord?: string;
  translateXForTenthWord?: string;
}

export default function ExpandReveale({
  text,
  initialValue,
  interval,
  translateXForFirstWord,
  translateXForSecondWord,
  translateXForThirdWord,
  translateXForFourthWord,
  translateXForFifthWord,
  translateXForSixthWord,
  translateXForSeventhWord,
  translateXForEighthWord,
  translateXForNinthWord,
  translateXForTenthWord,
}: ExpandRevealeProps) {
  const allWords = text.split(" ");

  const translateX = [
    translateXForFirstWord,
    translateXForSecondWord,
    translateXForThirdWord,
    translateXForFourthWord,
    translateXForFifthWord,
    translateXForSixthWord,
    translateXForSeventhWord,
    translateXForEighthWord,
    translateXForNinthWord,
    translateXForTenthWord,
  ];

  return (
    <>
      <div className="group flex gap-3 overflow-y-clip text-3xl font-semibold uppercase">
        {Array.from(allWords.keys()).map((wordIndex) => (
          <div
            className="flex translate-x-[--x] text-neutral-800 transition-transform duration-[.8s] group-hover:translate-x-0 group-hover:delay-0 group-[(:hover)]:delay-[.35s] dark:text-neutral-300"
            style={{ "--x": `${translateX[wordIndex]}` } as CustomCSSProperties}
          >
            {!!allWords[wordIndex] &&
              Array.from(allWords[wordIndex]!.split("").keys()).map(
                (letterIndex) => (
                  <span
                    className={
                      letterIndex === 0
                        ? ""
                        : "block translate-y-full transition-transform duration-[.4s] group-hover:translate-y-0 group-hover:delay-[--delayMouseOver] group-[(:hover)]:delay-[--delayMouseOut]"
                    }
                    style={
                      {
                        "--delayMouseOver": `calc(${initialValue}s + ${letterIndex} * ${interval}s)`,
                        "--delayMouseOut": `calc(${initialValue}s + ${
                          allWords[wordIndex]!.length - letterIndex
                        } * ${interval}s)`,
                      } as CustomCSSProperties
                    }
                  >
                    {allWords[wordIndex]?.split("")[letterIndex]}
                  </span>
                )
              )}
          </div>
        ))}
      </div>
    </>
  );
}
