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
                          blink: true,
                          element: "|",
                          hideWhenDone: false,
                          hideWhenDoneDelay: 1000,
                        }}
                      >
                        <span avgTypingDelay={200}>
                          {" "}
                          saoidfjsdikafsadfoijasidof
                          <span style={{ color: "#6be749" }}>~</span>${" "}
                        </span>
                        <br />
                        <Typist.Delay ms={1000} />
                        <span style={{ color: "#ffff19" }}>
                          {" "}
                          Eidmone@Desktop/AboutMe
                          <span style={{ color: "#0cb7eb" }}> (master)</span>
                          <span style={{ color: "#6be749" }}>~</span>${" "}
                        </span>
                      </Typist>
                    </h>
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
