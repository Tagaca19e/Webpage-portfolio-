import React, { useEffect, useRef } from "react";
import "./Hero.css";
import TextLoop from "react-text-loop";

const Hero = () => {
  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 ">
      <div className="max-w-md mb-auto space-y-5">
        <h1 className="text-5xl font-bold md:text-7xl">Hello </h1>
        <h1 className="text-5xl font-bold md:text-7xl">I’m </h1>
        {"\n"}
        <TextLoop>
          <h1 className="text-5xl font-bold md:text-7xl"> Eidmone</h1>
        </TextLoop>

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
