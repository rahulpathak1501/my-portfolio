import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Works from "./Works";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Router basename="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />
          {/* <Route element={NotFound} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
