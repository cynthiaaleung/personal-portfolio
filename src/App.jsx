import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro />
        <Portfolio/>
        <Works/>
      </div>
    </div>
  );
}

export default App;
