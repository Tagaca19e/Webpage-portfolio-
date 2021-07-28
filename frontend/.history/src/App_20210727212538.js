import { lazy, Suspense } from "react";
import "./index.css";
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Project = lazy(() => import("./components/Project"));
const Skill = lazy(() => import("./components/Skill"));
const Contact = lazy(() => import("./components/Contact"));
const Particles = lazy(() => import("./components/particles"));
function App() {
  return (
    <Suspense
      fallback={
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      }
    >
      <div className="App container my-10 mx-auto max-w-screen-lg bg-black">
        <Header />
        <Particles className="particles-back" />
        <div className="homePage">
          <Hero />
        </div>
        <Project />
        <Skill />
        <Contact />
      </div>
    </Suspense>
  );
}
export default App;
