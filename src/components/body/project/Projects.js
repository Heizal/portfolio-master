import React from 'react';
import Separator from '../../common/separator/Separator';
import { ProjectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import './projects.css';

function Projects() {
    const data = ProjectsData;
    return <div className="projects">
            <Separator/>
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) => {
                    return <ProjectCard project={project}/>                  
                })}
            </div>
        </div>
}

export default Projects
