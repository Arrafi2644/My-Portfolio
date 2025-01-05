import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProjects = () => {

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/projects')
        .then(res => {
            console.log(res.data);
            setProjects(res.data)
        })
    }, [])
    console.log(projects);
    return projects;
};

export default useProjects;