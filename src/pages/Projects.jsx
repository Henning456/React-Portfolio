import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h2>{project.title}</h2>
              <p>{project.tagline}</p>
              <img src={project.image} alt={project.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* <div className="container">
<h2>Quiz-App</h2>
<div className="project1"></div>
<h2>Favorite Movies</h2>
<div className="project2"></div>
<h2>ABC</h2>
<div className="project3"></div>
</div> */
