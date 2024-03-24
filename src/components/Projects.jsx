import "./css/Projects.css";
import project1 from "../images/Project1.png";
import project4 from "../images/Project4.png";
import project5 from "../images/Project5.png";
export default function Projects({ projectsRef }) {
  return (
    <div className="projects" ref={projectsRef} id="projects">
      <div className="project-header">
        <h3>Projects</h3>
        <p>Check out some of my work here</p>
      </div>

      <div className="actual-projects">
        <div className="project">
          <div className="project-details">
            <img src={project4} alt="" />
            <figcaption className="caption">
              An e-commerce site built for Urban Trove for various products and
              services.
            </figcaption>
          </div>
          <div className="project-text">
            <a
              href="https://urban-trove-test.netlify.app/"
              target="_blank"
              className="project-link"
            >
              Demo
            </a>
            <a
              href="https://github.com/urbantrove-ng/Urban-Trove/tree/main/client"
              target="_blank"
              className="project-link"
            >
              Code
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project-details">
            <img src={project5} alt="" />
            <figcaption className="caption">
              An e-commerce site built for Naija's Beverages for homemade
              Nigerian drinks.
            </figcaption>
          </div>
          <div className="project-text">
            <a
              href="https://naija-beverages.netlify.app/"
              target="_blank"
              className="project-link"
            >
              Demo
            </a>
            <a
              href="https://github.com/Toluwalase987/Beverages"
              target="_blank"
              className="project-link"
            >
              Code
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project-details">
            <img src={project1} className="something" alt="" />
            <figcaption className="caption">
              Learn something new and contribute by adding facts to help others
              learn something new.
            </figcaption>
          </div>
          <div className="project-text">
            <a
              href="https://today-i-learnt-tolu.netlify.app/"
              target="_blank"
              className="project-link"
            >
              Demo
            </a>
            <a
              href="https://github.com/Toluwalase987/Today-I-Learnt"
              target="_blank"
              className="project-link"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
