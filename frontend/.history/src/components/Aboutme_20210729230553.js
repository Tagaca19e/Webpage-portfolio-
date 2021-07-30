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
                        <p className="line">
                          {" "}
                          ayin_qoph@ayin_qoph:~$ sudo run about.exe
                          <span style={{ color: "#7f5af0" }}>~</span>$
                          ayin_qoph@ayin_qoph:~$ executing about.exe
                        </p>
                        <Typist.Delay ms={1000} />
                        <p className="line">
                          {" "}
                          asdfjklsajkldfsdjkf
                          <span style={{ color: "#7f5af0" }}>~</span>$
                          sadofjiosdajifsdafoisdfjioasjf
                        </p>
                        <br />
                        <p className="line">dfgdfgfg</p>
                        <span>
                          {" "}
                          saoidfjsdikafsadfoijasidof
                          <span style={{ color: "#7f5af0" }}>~</span>${" "}
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
