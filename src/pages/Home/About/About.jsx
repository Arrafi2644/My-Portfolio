import React from 'react';

const About = () => {
    return (
        <div id='about' className='my-4 md:my-8 lg:my-12 py-10'>
            <p className='font-medium text-center text-primary mb-1'>The Journey of a Passionate Developer</p>
            <h2 className='text-3xl md:text-4xl font-bold font-merriweather text-center '>About Me</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-10'>
                <div className='shadow-md p-6'>
                    <h2 className='text-2xl font-bold mb-2'>Introduction</h2>
                    <p>Hi, I'm Rafi, a passionate web developer with a love for creating intuitive and responsive websites. I'm always looking to improve my skills and keep up with the latest trends in the world of programming.</p>
                </div>
                <div className='shadow-md p-6'>
                    <h2 className='text-2xl font-bold mb-2'>Programming Journey</h2>
                    <p>My journey in programming started back in school when I first got my hands on HTML and CSS. From there, I dove deeper into JavaScript and React, which has become my tool of choice for building dynamic and interactive web applications. Along the way, I learned about backend development using Node.js and Firebase, which has helped me build full-stack applications.</p>
                </div>
                <div className='shadow-md p-6'>
                    <h2 className='text-2xl font-bold mb-2'>My Strengths and Interests in Programming</h2>
                    <p>I enjoy tackling frontend challenges and creating smooth, user-friendly interfaces with React and Tailwind CSS. I also like solving problems with clean, efficient code and exploring new technologies.</p>
                </div>
                <div className='shadow-md p-6'>
                    <h2 className='text-2xl font-bold mb-2'>Personal Interests Beyond Programming</h2>
                    <p>Outside of programming, I have a deep interest in sports, especially football and cricket. I find playing sports to be a great way to relax and stay active. Additionally, I enjoy sketching and painting, which helps me stay creative and brings balance to my technical side.</p>
                </div>
                <div className='shadow-md p-6'>
                    <h2 className='text-2xl font-bold mb-2'> Future Goals and Aspirations</h2>
                    <p>In the future, I aim to become a full-stack developer and work on more complex projects, constantly pushing myself to learn and grow. I'm also excited about contributing to open-source communities and collaborating with others to create impactful products.</p>
                </div>
                <div className='shadow-md p-6'>
                    <h2 className='text-2xl font-bold mb-2'>Closing Thoughts</h2>
                    <p>I believe in the power of continuous learning and am always excited about the next challenge. Let's connect and see how we can create something amazing together!</p>
                </div>
                
             </div>
        </div>
    );
};

export default About;