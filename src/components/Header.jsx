import React, { useState, createRef } from "react";
import "./css/Header.css";

export default function Header({aboutRef, skillsRef, homeRef, projectsRef, contactRef}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    toggleNav(); // Close the navigation menu after clicking a link
  };

  return (
    <div className="header">
      <div className="header-name">
        <h3 className="name">
          DevT<span className="addition">olu</span> 
        </h3>
      </div>

      <input
        type="checkbox"
        className="nav-checkbox"
        id="navi-toggle"
        checked={isNavOpen}
        onChange={toggleNav}
      />
      <label htmlFor="navi-toggle" className="nav-button">
        <span className="nav-icon">&nbsp;</span>
      </label>

      <div className="nav-background">&nbsp;</div>
      <div className="header-nav">
        <button className="header-link" onClick={() => scrollToRef(homeRef)}>
          Home
        </button>
        <button className="header-link" onClick={() => scrollToRef(aboutRef)}>
          About
        </button>
        <button className="header-link" onClick={() => scrollToRef(skillsRef)}>
          Skills
        </button>
        <button className="header-link" onClick={() => scrollToRef(projectsRef)}>
          Projects
        </button>
        <button className="header-link" onClick={() => scrollToRef(contactRef)}>
          Contact
        </button>
      </div>
    </div>
  );
}
