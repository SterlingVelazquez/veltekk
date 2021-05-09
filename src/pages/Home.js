import React from 'react';
import '../css/main.css';
import '../css/index.css';
import particleText from '../components/ParticleText.js'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const pageVariants = {
  in: { 
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (document.getElementById("canvas1").className.includes("erase"))
      document.getElementById("canvas1").className = "canvas1";
    else
      try { particleText(true) } catch { /* Error */ }
  }

  exitPage() {
    document.getElementById("canvas1").className = "canvas1 erase";
  }

  render() {
    document.getElementById("canvas1").style.display = "block";
    return (
      <motion.div className="main" initial="out" animate="in" exit="out" variants={pageVariants}>
        <Link to="/about" className="homeButtonContainer" id="aboutBtn" onClick={e => this.exitPage()}>
          <div className="homeButtonCircle">
              <div className="homeButtonArrow"></div>
          </div>
          <p className="homeButtonText">About Me</p>
        </Link>
        <Link to="/projects" className="homeButtonContainer" id="projectsBtn" onClick={e => this.exitPage()}>
          <div className="homeButtonCircle">
              <div className="homeButtonArrow"></div>
          </div>
          <p className="homeButtonText">My Projects</p>
        </Link>
      </motion.div>
    );
  }
}

export default Home;