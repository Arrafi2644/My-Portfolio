import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../../Contact/Contact';
import Footer from '../../../shared/Footer/Footer';

const Home = () => {
    return (
        <div className='scroll-smooth'>
          <Banner></Banner>
          <About></About>
          <Skill></Skill>
          <Education></Education>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;