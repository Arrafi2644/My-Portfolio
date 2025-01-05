import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home/Home';
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails';
import Contact from '../pages/Contact/Contact';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
      
        
      ],
     
    },
    {
      path: '/details/:id',
      element: <ProjectDetails></ProjectDetails>,
      loader: ({params})=>fetch(`http://localhost:5000/projects/${params.id}`)

    }
  ]);

export default router;