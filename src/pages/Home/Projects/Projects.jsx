import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import useProjects from '../../../hooks/useProjects';

const Projects = () => {
   const projects = useProjects()

    return (
        <div id='portfolio' className='my-4 md:my-8 lg:my-12 py-10'>
            <p className='font-medium text-center text-primary mb-1'>Crafting Innovative Solutions</p>
            <h2 className='text-3xl md:text-4xl font-bold font-merriweather text-center '>Portfolio</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 font-medium'>
             {
                projects.map(project => <ProjectCard
                     key={project.id}
                      project={project}
                      projects={projects}
                      ></ProjectCard>)
             }
             

            </div>
        </div>
    );
};

export default Projects;