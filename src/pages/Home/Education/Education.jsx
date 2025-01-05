import React from 'react';

const Education = () => {
    return (
        <div className='my-4 md:my-8 lg:my-12 py-10'>
            <p className='font-medium text-center text-primary mb-1'>Education & Learning</p>
            <h2 className='text-3xl md:text-4xl font-bold font-merriweather text-center '>My Education</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 font-medium'>
            <div className='p-4 bg-background rounded shadow'>
      <h3 className='text-lg font-semibold text-primary'>Diploma in Computer Science Engineering</h3>
      <p className=' mt-1 '><span>Institute: </span> Thakurgaon Polytechnic Institute</p>
      <p className=' mt-1 '><span>Timeline: </span> 2018 - 2022</p>
      <p className=' mt-2 '>
      I gained a strong foundation in computer science concepts, programming, and software development. My studies included practical experience with web development, database management, and algorithms, preparing me for real-world problem-solving and innovative projects.
      </p>
    </div>
            </div>

        </div>
    );
};

export default Education;