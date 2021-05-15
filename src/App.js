import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer'
import Header from './components/Header'

// import API from './utils/API';
function App() {
  return (
    
      <Router>
        <div>
          {/* <NavTabs /> */}
          <Header />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} /> */}
          <Footer />
        </div>
      </Router>
  );
}


export default App;
