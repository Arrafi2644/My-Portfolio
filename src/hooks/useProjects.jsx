import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProjects = () => {

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        axios.get('https://my-portfolio-server-nha4dj91r-ar-rafis-projects.vercel.app/projects')
        .then(res => {
            console.log(res.data);
            setProjects(res.data)
        })
    }, [])
    console.log(projects);
    return projects;
};

export default useProjects;