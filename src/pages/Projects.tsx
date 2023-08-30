import { NavLink } from "react-router-dom";
import projects from "../data/projects"

const Projects = () => {
    return (
        <>
            <div className="Projects">
                {projects && projects.map((project) => (
                    <NavLink to={`/projects/${project.seoUrl}`} className="Project" key={project.seoUrl}>

                        <img src={project.imageUrl} alt={`${project.name} screenshot`} />
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>

                    </NavLink>
                ))}
            </div>
        </>
    )
}



export default Projects;