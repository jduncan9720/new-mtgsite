import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Wrapper from './components/Wrapper'
import About from './pages/About'
import Artists from './pages/Artists'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <div className="container text-center">
        <Logo />
        <Navbar />
        <br />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/events" component={Events} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
