import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import '../ProjectCard/ProjectCard.css'
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, projects }) => {
    const { name, image, project_category, _id } = project;
    return (
<div className='shadow-md p-6 space-y-2 group'>
  <div className=".inner w-full rounded-md h-auto overflow-hidden">
  <img className='rounded-md' src={image} alt="" />
  </div>
  <h4 className='font-medium'>{project_category}</h4>
  <h3 className='title text-xl font-semibold'>{name}</h3>
  <Link to={`/details/${_id}`} className='btn btn-outline hover:bg-primary text-text hover:text-text min-h-0 h-auto py-2'>
    View Details <FaArrowUpRightFromSquare />
  </Link>
</div>
    );
};

export default ProjectCard;