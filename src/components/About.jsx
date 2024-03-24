import "./css/About.css";
import react from '../images/React.png' 
import redux from '../images/redux.png' 
import js from '../images/javascript.png' 
import tailwind from '../images/tailwind.png' 
import sass from '../images/sass.webp'  
import api from '../images/api.png' 
import html from '../images/html.png' 
import css from '../images/css.png' 

export default function About({aboutRef, skillsRef}) {


  return (
    <div className="about" ref={aboutRef} id="about">
      <h3>About</h3>
      <div className="about-text">
        <p>
          I'm a frontend developer with a passion for creating
          beautiful and functional user-friendly interfaces. I have reasonable experience
          in HTML, CSS, JavaScript, and the famous frontend framework/Library
          ReactJs, which was used to build this portfolio.
        </p>
        <p>
          I love collaborating with backend devs, designers and stakeholders to
          solve problems and bring ideas to life, creating engaging user
          experiences. I take pride in writing clean maintainable code, and
          ensuring the codebase is scalable and robust.
        </p>
        <p>
          I stay up to date with the latest industry trends and technologies,
          attending conferences and workshops to continuously improve my skills.
          I'm also dedicated to learning and growing as a developer, always
          seeking out new challenges and opportunities to expand my knowledge.
        </p>
        <p>
          When I'm not coding, you can find me drooling over gadgets and
          automobiles, watching anime or thinking of the easiest way to own a
          G-wagon. I'm a lifelong learner, a financially poor introvert, who's
          always looking to purchase a cool gadget or go for an adventure if the
          means is available.   
        </p>
      </div>

      <div className="skills" ref={skillsRef} id="skills">  
        <h3>My skills/stack</h3>
        <div className="skills-container">
          <div className="skills-list react"> 
            <img src={react} alt="" />
            <h5>React JS</h5>
          </div>
          <div className="skills-list redux">
            <img src={redux} alt="" />
            <h5>Redux</h5>
          </div>
          <div className="skills-list js"> 
            <img src={js} alt="" />
            <h5>JavaScript</h5>
          </div>
          <div className="skills-list tailwind">
            <img src={tailwind} alt="" />
            <h5>Tailwind Css</h5>
          </div>
          <div className="skills-list sass">
            <img src={sass} alt="" />
            <h5>sass</h5>
          </div>
          <div className="skills-list api">
            <img src={api} alt="" />
            <h5>api</h5>
          </div>
          <div className="skills-list html">
            <img src={html} alt="" />
            <h5>html 5</h5>
          </div>
          <div className="skills-list css">
            <img src={css} alt="" />
            <h5>css 3</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
