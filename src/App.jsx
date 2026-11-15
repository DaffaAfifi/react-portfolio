import Navbar from "./components/Navbar";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const projectMatch = window.location.pathname.match(/^\/projects\/([^/]+)$/);

  if (projectMatch) {
    return (
      <div className="min-h-screen">
        <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]"></div>
        <Navbar />
        <ProjectDetail slug={projectMatch[1]} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <About />
      <Expertise />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
