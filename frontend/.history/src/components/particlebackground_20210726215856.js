import Particles, { Container } from "react-tsparticles";
import React, { useContext } from "react";
import Particleconfig from "./particles.js";

export default function ParticleBackground() {
  return <Container params={Particleconfig}> </Container>;
}
