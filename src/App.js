import "./App.css";
import Home from "./components/Home";
import { HashLink as Link } from "react-router-hash-link";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import BackToTop from "./components/BackToTop";
function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/" exact Component={App} />
        <Route path="/Landing" exact Component={Landing} />
      </Routes> */}
      <div className="App">
        <div className="navbar">
          <div className="leftSide">
            <Link to="/landing" className="linkleft">
              {/* Atul Chauhan */}
            </Link>
          </div>
          <div className="rightSide">
            <Link to="#project" smooth className="link">
              Projects
            </Link>
            <Link to="#skills" smooth className="link">
              Skills
            </Link>
            <Link to="#education" smooth className="link">
              {" "}
              Education{" "}
            </Link>
            <Link to="#contact" smooth className="link">
              {" "}
              Contact
            </Link>
          </div>
          <div className="rightSidelow">
            <Link to="#project" smooth className="link">
              Projects
            </Link>
            <Link to="#skills" smooth className="link">
              Skills
            </Link>
            <Link to="#education" smooth className="link">
              {" "}
              Education{" "}
            </Link>
            <Link to="#contact" smooth className="link">
              {" "}
              Contact
            </Link>
          </div>
        </div>

        <Home/>
        <Project />
        <Skills />
        <Education />
        <Contact />
        <BackToTop/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
