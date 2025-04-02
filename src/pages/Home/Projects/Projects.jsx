import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import useProjects from '../../../hooks/useProjects';
import { easeIn, motion } from 'framer-motion'

const Projects = () => {
    const projects = useProjects()

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: easeIn }}
        >
            <div id='portfolio' className='pt-24'>
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
        </motion.div>
    );
};

export default Projects;