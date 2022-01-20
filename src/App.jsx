import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import { useState } from "react";
import "./app.scss";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Projects />
      </div>
    </div>
  );
}

export default App;
