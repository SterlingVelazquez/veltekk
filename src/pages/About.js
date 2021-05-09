import React from 'react';
import '../css/index.css';
import '../css/about.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const pageVariants = {
  in: {
    x:0,
    opacity:1,
    transition: {
      duration: 0
    }
  },
  out: { 
    x:"-80%",
    opacity: 0,
    transition: {
      duration: 1
    }
  }
}

const bio = ("I !am !a !full-stack !web !developer !with !a !knack !for !creating !modern, !captivating !designs !for !any !kind !of !project. " +
  "!My !passion !lies !in !creating !a !user !experience !that !leaves !people !appreciating !the !attention !to !the !most !minute !details, " +
  "!and !keeps !them !coming !back.").split('!');

const bigKnowledge = ['Javascript', 'CSS', 'HTML', 'Git/Github', 'Front-End', 'Agile', 'React'];
const midKnowledge = ['VSCode', 'NodeJS', 'NextJS', 'NoSQL', 'C/C++', 'Back-End', 'Rule-Based', 'Elementor'];
const smallKnowledge = ['Angular', 'Java', 'Azure', 'AWS', 'TypeScript', 'WordPress', 'eCommerce', 'Kubernetes', 'Docker'];

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  switchMountain() {
    document.getElementById("app").scrollTo({
      top: 0,
      behavior: "smooth"
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

  rotateExperience(e) {
    if (document.getElementById("smallMountain").className.includes("bubbleExperience")) {
      e.stopPropagation();
      document.getElementById("bigMountain").classList.toggle("rotate");
      document.getElementById("midMountain").classList.toggle("rotate");
    }
  }

  render() {
    document.getElementById("canvas1").style.display = "none";
    return (
      <motion.div className="aboutMain" id="aboutmain" initial="out" animate="in" exit="out" variants={pageVariants}>
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
          <div className="aboutLogoDiv" id="degreeLogoDiv">
            <div className="aboutLogoCircle" id="degreeLogo">
              <img className="aboutLogo" src="degree.svg" alt="degree"></img>
            </div>
            <p className="aboutLogoText" id="degreeText">Bachelor's Degree in Computer Science</p>
          </div>
          <div className="aboutLogoDiv" id="collegeLogoDiv">
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
              <div className="knowledge" id="bigKnowledge">
                <h1 className="bigKnowledgeHeader">Advanced</h1>
                <h1 className="bigKnowledgeSubheader">5+ Years</h1>
                {bigKnowledge.map(value => <p className="bigKnowledgeText" style={{ transition: `opacity ${Math.random() * 4}s ease 0.5s` }}>{value}</p>)}
              </div>
              <div className="experience" id="bigExperience">
                <h1 className="bigExperienceHeader">Freelance Website Developer</h1>
                <h1 className="bigExperienceSubheader">June 2020 - Present</h1>
                <p className="bigExperienceText">Addicted to creating modern, unique projects</p>
                <p className="bigExperienceText">Capable of completing smaller websites in a day</p>
                <p className="bigExperienceText">Anything from single-page to eCommerce websites</p>
                <p className="bigExperienceText">Mainly work with JS, CSS/HTML, and React,</p>
                <p className="bigExperienceText">but also familiar with Wordpress/Elementor</p>
                <p className="bigExperienceText">Consistent communication paramount to every project</p>
              </div>
              <div className="background" id="bigBackground">
                <img className="palm" src="palm.png" alt="palm tree"></img>
                <div className="leftSlant"></div>
                <div className="rightSlant"></div>
                <h1 className="backgroundHeader">My Life In Under One Minute</h1>
                <p className="backgroundText">I was born in Havana, Cuba and spent my childhood in Miami, Florida. My whole life, I've been raised by a
                family and a culture that taught me to take pride in having a hard work ethic and learning something new every day while enjoying the
                best life has to offer.</p>
                <p className="backgroundText">I learned how to play the piano so I could embrace my love for music. I became fluent in English, Spanish,
                and continue to study new languages every day like Italian and Japanese because you can never know enough.</p>
                <p className="backgroundText">I've never let anything get in my way, even struggling to get through intense chemotherapy to graduate from
                the School for Advanced Studies in 2016. Now I've graduated from Georgia Tech and work tirelessly every day to hone my skills in computer science.</p>
                <p className="backgroundText">And I'm enjoying every second.</p>
              </div>
            </div>
          </div>
          <div className="mountain" id="midMountain">
            <div className="hoverMountain" onClick={e => this.switchBubble("Experience")}>
              <p className="mountainText" id="midMountainText">Experience</p>
              <div className="knowledge" id="midKnowledge">
                <h1 className="midKnowledgeHeader">Intermediate</h1>
                <h1 className="midKnowledgeSubheader">2-5 Years</h1>
                {midKnowledge.map(value => <p className="midKnowledgeText" style={{ transition: `opacity ${Math.random() * 4}s ease 0.5s` }}>{value}</p>)}
              </div>
              <div className="experience" id="midExperience">
                <h1 className="midExperienceHeader">AT&#38;T | Systems Engineer</h1>
                <h1 className="midExperienceSubheader">Feb 2021 - Present</h1>
                <p className="midExperienceText">Well-versed in Agile software development</p>
                <p className="midExperienceText">Rule-based programming with JS &#38;</p>
                <p className="midExperienceText">Cloud-based development with Azure</p>
                <p className="midExperienceText">Collaborating with various teams of 6+ people,</p>
                <p className="midExperienceText">with emphasis on communication and timeliness</p>
                <p className="midExperienceText">Trained in Azure and ServiceNow Fundamentals</p>
              </div>
              <div className="background" id="midBackground">
                <img className="portrait" src="portrait2.png" alt="portrait"></img>
              </div>
            </div>
          </div>
          <div className="mountain" id="smallMountain">
            <div className="hoverMountain" onClick={e => this.switchBubble("Background")}>
              <div className="mountainRotater">
                <p className="mountainText" id="smallMountainText">Background</p>
                <div className="knowledge" id="smallKnowledge">
                  <h1 className="smallKnowledgeHeader">Beginner</h1>
                  <h1 className="smallKnowledgeSubheader">&#60;2 Years</h1>
                  {smallKnowledge.map(value => <p className="smallKnowledgeText" style={{ transition: `opacity ${Math.random() * 4}s ease 0.5s` }}>{value}</p>)}
                </div>
                <div className="experience" id="smallExperience" onClick={e => this.rotateExperience(e)}>
                  <img className="rotateArrow" src="rotate.svg" alt="rotate"></img>
                </div>
                <div className="background" id="smallBackground">
                  <img className="piano" src="piano.gif" alt="piano"></img>
                </div>
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