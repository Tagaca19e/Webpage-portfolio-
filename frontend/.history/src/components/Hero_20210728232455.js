import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";
import particles from "./particles";

const Hero = () => {
  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 ">
      <div className="max-w-md mb-auto space-y-5">
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello <hp>👋</hp>
        </h1>{" "}
        <hp>👋</hp>
        <h1 className="text-5xl font-bold md:text-7xl">I’m Eidmone</h1>
        <p className="tracking-wide leading-relaxed">
          I have a passion for developing user-friendly, accessible and
          responsive websites. I never stop learning and for me, each new
          project is another adventure.{" "}
        </p>
      </div>
    </section>
  );
};
export default Hero;
