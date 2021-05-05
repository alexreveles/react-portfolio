import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
// import { GoMarkGithub } from "react-icons/go";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Icons from "./components/Icons";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <main>
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </main>
        {/* <GoMarkGithub /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
