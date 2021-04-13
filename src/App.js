import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import BackGroundImg from './images/BeachTexture.svg'

function App() {
  return (
    <Router>
      <div style={{
        backgroundImage: `url(${BackGroundImg})`,
        height: '100%'
      }}>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
