import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Icons from './components/Icons/index'


function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <main>
          <Route exact path="/" component={About} /> 
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </main>
        <Icons/>
       
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
