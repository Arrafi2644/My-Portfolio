import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='bg-background font-open-sans text-gray-800'>
            <Navbar></Navbar>
            <div className='max-w-7xl w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            {/* footer  */}
        </div>
    );
};

export default MainLayout;