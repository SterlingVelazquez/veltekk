import React from 'react';
import '../css/index.css';
import '../css/projects.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const pageVariants = {
  in: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  out: {
    x: "50%",
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
        <Link to="/" className="projectButtonContainer">
          <div className="projectButtonCircle">
            <div className="projectButtonArrow"></div>
          </div>
          <p className="projectButtonText">Home</p>
        </Link>
        <div className="animateBody">
          <h1 className="projectPageHeader">This page is under construction...</h1>
          <p className="projectSubheader">But while I work on the cooler design, here's a simple list with some of my projects. All of the
            following were created with Javascript, CSS, HTML, and React. They use the Next.JS framework, are organized in Github, and deployed on Vercel.
            Except for Bravos Mental Health Care, which was created with WordPress and Elementor. Click them to visit!</p>
          <ul className="projectList">
            <a className="projectLink" target="_blank" rel="noopener noreferrer" href="https://tabdat.app/">
              <li className="projectItem">
                <p className="projectHeader">TabdaT</p>
                <p className="projectDescription">My most ambitious project, and also a personal one. I decided to create a bookmark manager for Google Chrome that gave users
                  all kinds of customization options. It uses Firebase (noSQL database) to store user information. Currently, it's only optimized for desktop use with mobile
                  support coming soon.</p>
              </li>
            </a>
            <a className="projectLink" target="_blank" rel="noopener noreferrer" href="https://paoandcamilowedding.vercel.app/">
              <li className="projectItem">
                <p className="projectHeader">Paola &#38; Camilo's Wedding</p>
                <p className="projectDescription">A wedding website which leverages React effects to create smooth page animations on scroll. This website, and all the following,
                  are optimized for use on all devices.</p>
              </li>
            </a>
            <a className="projectLink" target="_blank" rel="noopener noreferrer" href="https://www.turnpikelectric.us/">
              <li className="projectItem">
                <p className="projectHeader">Turnpike Electric</p>
                <p className="projectDescription">A simple, informational company website for an electrical contracting company. I usually aim to create single-page websites for
                  ease-of-use.</p>
              </li>
            </a>
            <a className="projectLink" target="_blank" rel="noopener noreferrer" href="https://firelinktech.com/">
              <li className="projectItem">
                <p className="projectHeader">Firelink Tech Inc.</p>
                <p className="projectDescription">My first ever independently created website. It was created in collaboration with the owner of Firelink Tech and designed to give
                  users information on the company as well as giving the company employees an avenue to upload reports / updates. This also uses Firebase to store data.</p>
              </li>
            </a>
            <a className="projectLink" target="_blank" rel="noopener noreferrer" href="https://bravosmentalhealthcare.com/">
              <li className="projectItem">
                <p className="projectHeader">Bravos Mental Health Care</p>
                <p className="projectDescription">One of my Wordpress sites - created in collaboration with the owner of Bravos. WordPress was utilized to make it possible to use the
                  site to sell services in the future through the WooCommerce plugin.</p>
              </li>
            </a>
          </ul>
        </div>
      </motion.div>
    );
  }
}

export default Projects;

// <img className="sand" src="sand.png" alt="sand"></img>