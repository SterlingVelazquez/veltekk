import React from 'react';
import About from "./pages/About.js"
import Home from "./pages/Home.js"
import Projects from "./pages/Projects.js"
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={Home} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;