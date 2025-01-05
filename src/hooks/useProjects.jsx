import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProjects = () => {

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        axios.get('https://my-portfolio-server-delta-kohl.vercel.app/projects')
        .then(res => {
            console.log(res.data);
            setProjects(res.data)
        })
    }, [])
    console.log(projects);
    return projects;
};

export default useProjects;