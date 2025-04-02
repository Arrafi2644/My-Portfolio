import React from 'react';
import { easeIn, motion } from 'framer-motion'

const Education = () => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: easeIn }}
        >
            <div className='pt-24'>
                <p className='font-medium text-center text-primary mb-1'>Education & Learning</p>
                <h2 className='text-3xl md:text-4xl font-bold font-merriweather text-center '>My Education & Trainings</h2>

                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 font-medium'>
                        <div className='p-4 bg-background rounded shadow'>
                            <h4 className='text-base font-semibold'>Academic</h4>
                            <h3 className='text-lg font-semibold text-primary'>Diploma in Computer Science Engineering</h3>
                            <p className=' mt-1 '><span>Institute: </span> Thakurgaon Polytechnic Institute</p>
                            <p className=' mt-1 '><span>Timeline: </span> 2018 - 2022</p>
                            <p className=' mt-2 '>
                                I gained a strong foundation in computer science concepts, programming, and software development. My studies included practical experience with web development, database management, and algorithms, preparing me for real-world problem-solving and innovative projects.
                            </p>
                        </div>
                        <div className='p-4 bg-background rounded shadow'>
                            <h4 className='text-base font-semibold'>Skill Developments</h4>
                            <h3 className='text-lg font-semibold text-primary'>Complete Web Development</h3>
                            <p className=' mt-1 '><span>Institute: </span> Programming Hero</p>
                            <p className=' mt-1 '><span>Timeline: </span> Jul 2024 - Jan 2025</p>
                            <p className=' mt-2 '>
                                I gained a strong foundation in web development. My studies included practical experience with HTML, CSS, Tailwind CSS, DaisyUI Javascript, React.js, Firebase, Node.js, Express.js, MongoDB  and preparing me for real-world problem-solving and innovative projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Education;