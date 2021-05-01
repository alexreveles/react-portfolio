import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div>
      <Nav></Nav>
      <main>
        <Route path="/about" component={About}/>
         <Route path="/portfolio" component={Portfolio}/>
         <Route path="/" component={Home}/>
      </main>
      <footer> &copy; 2021 Alex Reveles, Inc</footer> 
    </div>
    </Router>
  );
}

export default App;


