import projects from "../data/projects"

const Projects = () => {
    return (
        <>
            <div className="Projects">
                {projects && projects.map((project) => (
                    <div className="Project">
                        <img src={project.imageUrl} alt={`${project.name} screenshot`} />
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}



export default Projects;