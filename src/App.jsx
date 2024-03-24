import Header from "./components/Header"
import Info from "./components/Info"
import About from "./components/About"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
import { createRef } from "react"


export default function App(){
  const aboutRef = createRef() 
  const homeRef = createRef();
  const skillsRef = createRef();
  const projectsRef = createRef();
  const contactRef = createRef();

  return(
    <div className="components">
      <Header aboutRef={aboutRef} homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <Info homeRef={homeRef}/>
      <About aboutRef={aboutRef} skillsRef={skillsRef}/>
      <Projects projectsRef={projectsRef}/>
      <Contacts contactRef={contactRef}/>
    </div>
  )
}