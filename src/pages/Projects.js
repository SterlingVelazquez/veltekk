import React from 'react';
import '../css/index.css';
import '../css/projects.css';
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

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    document.getElementById("canvas1").style.display = "none";
    return (
      <motion.div className="projectsMain" initial="out" animate="in" exit="out" variants={pageVariants}>
        <Link to="/">
          <div className="placeholder">
            <p className="placeholderText">This page is under construction.</p>
              <button className="placeholderButton">Click here to go back</button>
          </div>
        </Link>
      </motion.div>
    );
  }
}

export default Projects;