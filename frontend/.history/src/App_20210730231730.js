import { lazy, Suspense } from "react";
import "./index.css";
import CustomCursor from "custom-cursor-react";
// import "custom-cursor-react/dist/index.css";
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Project = lazy(() => import("./components/Project"));
const Skill = lazy(() => import("./components/Skill"));
const Contact = lazy(() => import("./components/Contact"));
const Particles = lazy(() => import("./components/particles"));
const Timeline = lazy(() => import("./components/Timeline"));
const About = lazy(() => import("./components/Aboutme"));

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
        <CustomCursor
          targets={[".link", ".your-css-selector"]}
          customClass="custom-cursor"
          dimensions={30}
          fill="#FFF"
          smoothness={{
            movement: 0.2,
            scale: 0.1,
            opacity: 0.2,
          }}
          targetOpacity={0.5}
        />

        <Particles className="particles-settings" />
        <div className="homePage">
          <Hero />
        </div>
        <Project />
        <About />
        <Timeline />
        <main>
          <Skill />
          <Contact />
        </main>
      </div>
    </Suspense>
  );
}
export default App;
