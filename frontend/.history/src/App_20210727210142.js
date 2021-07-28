import { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Project = lazy(() => import("./components/Project"));
const Skill = lazy(() => import("./components/Skill"));
const Contact = lazy(() => import("./components/Contact"));
const Particles = lazy(() => import("./components/particles"));

function App() {
  return (
    <div>
      <Header />

      <Hero />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
