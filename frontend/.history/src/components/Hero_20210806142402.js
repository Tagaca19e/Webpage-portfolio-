import React, { useEffect, useRef } from "react";
import "./Hero.css";
import TextLoop from "react-text-loop";
import ReactTypingEffect from "react-typing-effect";
import Typist from "react-typist";

const Hero = () => {
  return (
    <section className=" ">
      <div className="max-w-md mb-auto space-y-5">
        <h1 className="text-5xl font-bold md:text-7xl">
          <ReactTypingEffect text={["Hello."]} />
        </h1>

        <h1 className="Im-Eidmone">
          <Typist>
            <span> I'm Eidmone</span>
            <Typist.Backspace count={7} delay={200} />
            <span> Phrase </span>
          </Typist>
        </h1>

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
