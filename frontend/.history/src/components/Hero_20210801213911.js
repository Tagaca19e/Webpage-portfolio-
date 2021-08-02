import React, { useEffect, useRef } from "react";
import "./Hero.css";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Forest", "Building", "Tree", "Color"];
const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 ">
      <div className="max-w-md mb-auto space-y-5">
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello{" "}
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
        </h1>

        <h1 className="text-5xl font-bold md:text-7xl">I’m Eidmone</h1>
        <div className="short-description">
          <p className="tracking-wide leading-relaxed">
            I have a passion for developing user-friendly, accessible and
            responsive websites. I never stop learning and for me, each new
            project is another adventure.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
