import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';
import { FaThumbsUp, FaX } from 'react-icons/fa6';

const ProjectDetails = () => {

    const projects = useProjects()
    const navigate = useNavigate()

    const project = useLoaderData()
    console.log(project);
    const {name, image, description, mainStack, project_category, details} = project

    const handleBack = ()=>{
          navigate(-1)
    }


    return (
        <div className='relative my-10 max-w-7xl w-11/12 mx-auto p-10 border rounded-md'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <img className='rounded-md' src={image} alt="" />
                <div className='space-y-2'>
                    <p className='font-medium'>{project_category}</p>
                    <h2 className='text-4xl font-bold text-primary'>{name}</h2>
                    <p>{description}</p>
                    <div>
                    <h3 className='text-xl font-bold'>Technologies</h3>
                     {mainStack.map((tech, index) => <span className='font-medium mr-2' key={index}>{tech},</span>)}
                    </div>
                    <p>{details.briefDescription} <br /> {details.detailedDescription}</p>
                    <p className='font-semibold'>Site Live Link: <Link to={details?.liveLink} className='text-primary'>{details.liveLink}</Link></p>
                    <p className='font-semibold'>Github Client Link: <Link to={details?.githubLinkClient} className='text-primary'>{details.githubLinkClient}</Link></p>
                    {
                        details?.githubLinkClient && <p className='font-semibold'>Github Server Link: <Link to={details?.githubLinkServer} className='text-primary'>{details?.githubLinkServer}</Link></p>
                    }
                    {/* <p> <span className='font-semibold'>Detailed Description:</span> {details.detailedDescription}</p> */}
                    <p><span className='font-semibold'>Improvements:</span> {details.improvements}</p>
                    <button className="btn btn-outline text-primary hover:bg-primary">Like This <FaThumbsUp></FaThumbsUp></button>
                    <button onClick={handleBack} className='border btn bg-white btn-outline rounded-full text-primary hover:bg-primary hover:border-white font-semibold absolute -top-1 right-1'><FaX></FaX></button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;