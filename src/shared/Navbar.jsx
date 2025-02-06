import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo2.png'

const Navbar = () => {
    

    const links = <>
    <li><a>Home</a></li>
    <li><a href='#about'>About Me</a></li>
    <li><a href='#skill'>Skill</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#contact'>Contact</a></li>
    </>

    return (
      <div className='bg-background shadow-md sticky top-0 left-0 z-10'>
          <div className="navbar max-w-7xl w-11/12 mx-auto font-merriweather ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-gray-800 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link className=" font-bold text-primary text-xl pl-0">
          <img className='h-10 w-10 rounded-full object-cover' src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-800">          
          {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href='#contact' className="btn bg-primary text-gray-800">Hire me</a>
        </div>
      </div>
      </div>
    );
};

export default Navbar;