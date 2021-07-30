import React, { useContext, Fragment } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Fade from "react-reveal/Fade";
import "./Aboutme.css";

function About() {
  return (
    <section
      className="about_section section section2"
      id="aboutSection"
      name="about"
    >
      <VisibilitySensor>
        <Fade bottom cascade>
          <div className="container">
            <div className="device">
              <div className="frame">
                <div className="screen">
                  <div className="window-content">
                    <h>
                      <Typist
                        cursor={{
                          show: true,
                          hideWhenDone: false,
                          hideWhenDoneDelay: 1000,
                        }}
                        // avgTypingSpeed={2200}
                        avgTypingDelay={20}
                      >
                        <span style={{ color: "#ffff19" }}>
                          {" "}
                          Eidmone@Desktop/AboutMe
                          <span style={{ color: "#0cb7eb" }}> (master)</span>
                          <span style={{ color: "#ffffff" }}> $</span>{" "}
                        </span>
                        <Typist.Delay ms={500} />
                        <span style={{ color: "#ffffff" }}>
                          {" "}
                          npm start{" "}
                        </span>{" "}
                        <br />
                        <span style={{ color: "#ffffff" }}>
                          {" "}
                          Compiling ...
                        </span>{" "}
                        <p className="intro" avgTypingSpeed={2200}>
                          {" "}
                          Hello there! I am currently a sophomore at CSUB,
                          although a second year student, I believe that I have
                          developed extensive skills in front-end development
                          and backend development. I am very proficient in using
                          JavaScript, ReactJS, ExpressJS, HTML, and CSS. I
                          always try to find time to get better every day in
                          developing on my free time.{" "}
                        </p>
                        <span style={{ color: "#ffff19" }}>
                          {" "}
                          Eidmone@Desktop/AboutMe
                          <span style={{ color: "#0cb7eb" }}> (master)</span>
                          <span style={{ color: "#ffffff" }}> $</span>{" "}
                        </span>
                      </Typist>
                    </h>
                    <j></j>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </VisibilitySensor>
    </section>
  );
}

export default About;
