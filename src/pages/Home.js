import React from 'react';
import '../css/main.css';
import '../css/index.css';
import particleText from '../components/ParticleText.js'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const pageVariants = {
  in: { 
    opacity: 1,
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

  render() {
    document.getElementById("canvas1").display = "block";
    try { particleText(true) } catch { /* Error */ }
    return (
      <motion.div className="main" initial="out" animate="in" exit="out" variants={pageVariants}>
        <Link to="/about" className="homeButtonContainer">
            <div className="homeButtonCircle">
                <div className="homeButtonArrow"></div>
            </div>
            <p className="homeButtonText">About Me</p>
        </Link>
        <Link to="/projects" className="homeButtonContainer">
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