import React from 'react';
import '../css/index.css';
import '../css/about.css';
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

const bio = ("I !am !a !full-stack !web !developer !with !a !knack !for !creating !modern, !captivating !designs !for !any !kind !of !project. " +
  "!My !passion !lies !in !creating !a !user !experience !that !leaves !people !appreciating !the !attention !to !the !most !minute !details, " +
  "!and !keeps !them !coming !back.").split('!');

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  switchMountain() {
    document.getElementById("app").scrollTo({
      top:0,
      behavior:"smooth"
    })
    if (document.getElementById("bigMountain").className.includes("bubble")) {
      for (var i = 0; i < 3; i++)
        document.getElementsByClassName("mountain")[i].className = "mountain";
      document.getElementById("mountaincontainer").classList.toggle("bubble");
    }
    else
      document.getElementById("mountaincontainer").classList.toggle("switch");
    document.getElementById("abouttextcontainer").classList.toggle("switch");
  }

  switchBubble(type) {
    if (document.getElementById("mountaincontainer").className.includes("switch")) {
      for (var i = 0; i < 3; i++)
        document.getElementsByClassName("mountain")[i].classList.toggle("bubble" + type);
      document.getElementById("mountaincontainer").classList.toggle("switch");
      document.getElementById("mountaincontainer").classList.toggle("bubble");
    }
    else if (document.getElementById("bigMountain").className.includes("bubble")) {
      for (var k = 0; k < 3; k++)
        document.getElementsByClassName("mountain")[k].className = "mountain";
      document.getElementById("mountaincontainer").classList.toggle("switch");
      document.getElementById("mountaincontainer").classList.toggle("bubble");
    }
  }

  render() {
    document.getElementById("canvas1").display = "none";
    return (
      <motion.div className="aboutMain" id="aboutmain" initial="out" animate="in" exit="out" variants={pageVariants} exitBeforeEnter>
        <Link to="/" className="aboutButtonContainer">
          <div className="aboutButtonCircle">
            <div className="aboutButtonArrow"></div>
          </div>
          <p className="aboutButtonText">Home</p>
        </Link>
        <div className="aboutTextContainer" id="abouttextcontainer">
          <h1 className="aboutHeader">Hi, I'm Sterling Velazquez</h1>
          <p className="aboutBio">
            {bio.map(char => <span className="bioLetter" style={{ animation: `letterFade ${Math.random() * 2 + 0.75}s ease-out` }}>{char}</span>)}
          </p>
          <div className="aboutLogoDiv">
            <div className="aboutLogoCircle" id="ageLogo">
              <img className="aboutLogo" src="age.svg" alt="age"></img>
            </div>
            <p className="aboutLogoText" id="ageText">23 Years Old</p>
          </div>
          <div className="aboutLogoDiv">
            <div className="aboutLogoCircle" id="addressLogo">
              <img className="aboutLogo" src="address.svg" alt="address"></img>
            </div>
            <p className="aboutLogoText" id="addressText">Atlanta, GA</p>
          </div>
          <div className="aboutLogoDiv">
            <div className="aboutLogoCircle" id="degreeLogo">
              <img className="aboutLogo" src="degree.svg" alt="degree"></img>
            </div>
            <p className="aboutLogoText" id="degreeText">Bachelor's Degree in Computer Science</p>
          </div>
          <div className="aboutLogoDiv">
            <div className="aboutLogoCircle" id="collegeLogo">
              <img className="aboutLogo" src="college.svg" alt="college"></img>
            </div>
            <p className="aboutLogoText" id="collegeText">Georgia Institute of Technology</p>
          </div>
        </div>
        <div className="mountainContainer" id="mountaincontainer">
          <div className="mountain" id="bigMountain">
            <div className="hoverMountain" onClick={e => this.switchBubble("Knowledge")}>
              <p className="mountainText" id="bigMountainText">Knowledge</p>
              <div className="bubbleKnowledge" id="bigKnowledge">
                
              </div>
              <div className="bubbleExperience" id="bigExperience">

              </div>
              <div className="bubbleBackground" id="bigBackground">

              </div>
            </div>
          </div>
          <div className="mountain" id="midMountain">
            <div className="hoverMountain" onClick={e => this.switchBubble("Experience")}>
              <p className="mountainText" id="midMountainText">Experience</p>
              <div className="bubbleKnowledge" id="midKnowledge">

              </div>
              <div className="bubbleExperience" id="midExperience">

              </div>
              <div className="bubbleBackground" id="midBackground">

              </div>
            </div>
          </div>
          <div className="mountain" id="smallMountain">
            <div className="hoverMountain" onClick={e => this.switchBubble("Background")}>
              <p className="mountainText" id="smallMountainText">Background</p>
              <div className="bubbleKnowledge" id="smallKnowledge">

              </div>
              <div className="bubbleExperience" id="smallExperience">

              </div>
              <div className="bubbleBackground" id="smallBackground">

              </div>
            </div>
          </div>
          <div className="mountainSwitch" onClick={e => this.switchMountain()}>
            <img className="hikingLogo" src="hiking.svg" alt="hiking"></img>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default About;

/*
<svg viewBox="0 0 500 500" className="curveContainer">
  <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
  <text width="500" className="curveText">
    <textPath xlinkHref="#curve">
      Advanced | 5+ Years
    </textPath>
  </text>
</svg>
*/