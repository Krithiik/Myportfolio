import "./Projects.scss";
import "../json/projectsList";
import { projects } from "../json/projectsList";
import Card from "./Card";
export default function Projects() {
  return (
    <div className="Projects-container">
      <h1 className="projects-heading">Projects</h1>
      <span className="header_line"></span>
      <div className="projectGrid">
        {projects.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
