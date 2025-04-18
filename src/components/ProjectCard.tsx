import { Project } from "../data/projects";
import WorkImage from "./WorkImage";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="work-box">
      <div className="work-info">
        <div className="work-title">
          <h3>{String(project.id).padStart(2, '0')}</h3>
          <div>
            <h4>{project.title}</h4>
            <p>{project.category}</p>
          </div>
        </div>
        <h4>Tools and features</h4>
        <p>{project.tools}</p>
        {project.description && <p className="project-description">{project.description}</p>}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        )}
      </div>
      <WorkImage image={project.image} alt={project.title} />
    </div>
  );
};

export default ProjectCard; 