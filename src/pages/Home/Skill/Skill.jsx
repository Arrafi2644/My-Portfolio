import React from 'react';
import { SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";

const Skill = () => {
    return (
        <div id='skill' className='my-4 md:my-8 lg:my-12 py-10'>
            <p className='font-medium text-center text-primary mb-1'>1+ Years of Experience</p>
            <h2 className='text-3xl md:text-4xl font-bold font-merriweather text-center '>My Skills</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 font-medium'>
                <div>
                    <div className='flex justify-between gap-6'>
                    <div className='flex items-center gap-2'>
                            <span>
                                <SiHtml5></SiHtml5>
                            </span>
                        <h2>HTML</h2>
                        </div>
                        <p>85%</p>
                    </div>
                    <progress className="progress text-primary full" value="85" max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between gap-6'>
                    <div className='flex items-center gap-2'>
                            <span>
                                <SiCss3></SiCss3>
                            </span>
                        <h2>CSS</h2>
                        </div>
                        <p>80%</p>
                    </div>
                    <progress className="progress text-primary w-full" value="80" max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between gap-6'>
                    <div className='flex items-center gap-2'>
                            <span>
                                <SiJavascript></SiJavascript>
                            </span>
                        <h2>JAVASCRIPT</h2>
                        </div>
                        <p>75%</p>
                    </div>
                    <progress className="progress text-primary w-full" value="75" max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between gap-6'>
                    <div className='flex items-center gap-2'>
                            <span>
                                <SiReact></SiReact>
                            </span>
                        <h2>REACT</h2>
                        </div>
                        <p>80%</p>
                    </div>
                    <progress className="progress text-primary w-full" value="80" max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between gap-6'>
                    <div className='flex items-center gap-2'>
                            <span>
                                <SiFirebase></SiFirebase>
                            </span>
                        <h2>FIREBASE</h2>
                        </div>
                        <p>65%</p>
                    </div>
                    <progress className="progress text-primary w-full" value="65" max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between gap-6'>
                    <div className='flex items-center gap-2'>
                            <span>
                                <SiNodedotjs></SiNodedotjs>
                            </span>
                        <h2>NODE JS</h2>
                        </div>
                        <p>50%</p>
                    </div>
                    <progress className="progress text-primary w-full" value="50" max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between gap-6'>
                        <div className='flex items-center gap-2'>
                            <span>
                                <SiExpress></SiExpress>
                            </span>
                        <h2>EXPRESS JS</h2>
                        </div>
                        <p>60%</p>
                    </div>
                    <progress className="progress text-primary w-full" value="60" max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between gap-6'>
                        <div className='flex items-center gap-2'>
                            <span>
                                <SiMongodb></SiMongodb>
                            </span>
                            <h2>MONGO DB</h2>
                        </div>
                        <p>65%</p>
                    </div>
                    <progress className="progress text-primary w-full" value="65" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skill;