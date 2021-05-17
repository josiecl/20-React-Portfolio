import React from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';

// import API from './utils/API';
function App() {
  return (
    
      <Router>
        <div>
          {/* <NavTabs /> */}
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

{/* <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/gamedashboard" component={GameDashboard} />
        <Route exact path="/gameroom" component={Gameroom} />
        <Route exact path="/profile" component= {Profile}/>
      </Switch> */}

export default App;
