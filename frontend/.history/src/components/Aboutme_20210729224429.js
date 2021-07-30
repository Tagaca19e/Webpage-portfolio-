import React, { useContext, Fragment } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Fade from "react-reveal/Fade";
import "./Aboutme.css";
import { ScrollContext } from "../../Context/scroll";
import { aboutSection } from "../../techfolio";

function About() {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <section
      className="about_section section section2"
      id="aboutSection"
      name="about"
    >
      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            scrollChange("about");
          }
        }}
      >
        <Fade bottom cascade>
          <div className="container">
            <div className="device">
              <div className="frame">
                <div className="screen">
                  <div className="window-content">
                    <h2>
                      <Typist
                        cursor={{
                          show: true,
                          hideWhenDone: false,
                          hideWhenDoneDelay: 1000,
                        }}
                        avgTypingSpeed={200}
                        avgTypingDelay={20}
                      >
                        <p className="line">
                          {" "}
                          Hello My name ins sajdfkjaslkdfjlksdfjsjdfkjlasdf
                          <span style={{ color: "#7f5af0" }}>~</span>$
                          sjdfjsdajfjdsakfjklsdajklfjlksajdf
                        </p>
                        <Typist.Delay ms={1000} />
                        <p className="line">
                          {" "}
                          asdfjklsajkldfsdjkf
                          <span style={{ color: "#7f5af0" }}>~</span>$
                          sadofjiosdajifsdafoisdfjioasjf
                        </p>
                        <br />
                        <p className="line">{aboutSection.about}</p>
                        <span>
                          {" "}
                          saoidfjsdikafsadfoijasidof
                          <span style={{ color: "#7f5af0" }}>~</span>${" "}
                        </span>
                      </Typist>
                    </h2>
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
