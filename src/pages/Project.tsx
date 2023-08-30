
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import { useEffect, useState } from 'react';
import { ProjectT } from '../models.ts/Project';
import { AiOutlineArrowRight } from "react-icons/ai";

const Project = () => {

    const { seoUrl } = useParams();
    const [project, setProject] = useState<ProjectT>()


    useEffect(() => {

        const p = projects.find(p => { return p.seoUrl == seoUrl; });
        setProject(p);

    }, [])


    return (
        <>

            {project &&
                <div className="Project-Item">
                    <img src={project.imageUrl} alt={`${project.name} screenshot`} />
                    <div className="Project-Item-Details">
                        <h2>{project.name}</h2>
                        <p><span>Description: </span>{project.description}</p>
                        <p><span>Built with: </span>{project.technology}</p>
                        <a href={project.gitHubUrl} target='_blank'>GitHub <AiOutlineArrowRight /></a>
                        <a href={project.liveUrl} target='_blank'>Live  <AiOutlineArrowRight /></a>
                    </div>
                </div>
            }

        </>
    )
}



export default Project;