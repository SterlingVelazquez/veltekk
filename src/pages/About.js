import React from 'react';
import '../css/index.css';
import '../css/about.css';
import particleText from '../components/ParticleText.js'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const pageVariants = {
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const pageTransition = { type: "tween", ease: "easeIn" }

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    try { particleText(false) } catch { /* Error */ }
    return (
      <motion.div className="aboutMain" initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
          <div className="placeholder">
            <p className="placeholderText">This page is under construction.</p>
            <Link to="/">
              <button className="placeholderButton">Click here to go back</button>
            </Link>
          </div>
      </motion.div>
    );
  }
}

export default About;