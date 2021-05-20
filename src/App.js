import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';

// import API from './utils/API';
function App() {
  return (
    
      <HashRouter>
       
          <Header />
          <Switch>
           
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        
      </HashRouter>
  );
}


export default App;
