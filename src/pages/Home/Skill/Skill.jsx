import React from 'react';
import { SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import htmlLogo from '../../../assets/skills/icons8-html-5-48.png' 
import cssLogo from '../../../assets/skills/icons8-css-48.png' 
import tailwindLogo from '../../../assets/skills/icons8-tailwindcss-48.png' 
import javascriptLogo from '../../../assets/skills/icons8-javascript-48.png' 
import reactLogo from '../../../assets/skills/icons8-react-js-48.png' 
import firebaseLogo from '../../../assets/skills/icons8-firebase-48.png' 
import nodeLogo from '../../../assets/skills/icons8-nodejs-48.png' 
import expressLogo from '../../../assets/skills/icons8-express-js-50.png' 
import mongoLogo from '../../../assets/skills/icons8-mongo-db-48.png' 

const Skill = () => {
    return (
        <div id='skill' className=' pt-24'>
            <p className='font-medium text-center text-primary mb-1'>1+ Years of Experience</p>
            <h2 className='text-3xl md:text-4xl font-bold font-merriweather text-center '>My Skills</h2>

            {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 font-medium'>
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
            </div> */}
            <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 text-center place-items-center gap-2 mt-6'>
                <div className='flex flex-col items-center justify-center gap-2 w-full border p-3'>
                    <img src={htmlLogo} alt="" />
                    <h3>HTML</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 w-full border p-3'>
                    <img src={cssLogo} alt="" />
                    <h3>CSS</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 w-full border p-3'>
                    <img src={tailwindLogo} alt="" />
                    <h3>Tailwind</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 w-full border p-3'>
                    <img src={javascriptLogo} alt="" />
                    <h3>Javascript</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 w-full border p-3'>
                    <img src={reactLogo} alt="" />
                    <h3>React.js</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 w-full border p-3'>
                    <img src={firebaseLogo} alt="" />
                    <h3>Firebase</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 w-full border p-3'>
                    <img src={nodeLogo} alt="" />
                    <h3>Node.js</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 w-full border p-3'>
                    <img src={expressLogo} alt="" />
                    <h3>Express.js</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 w-full border p-3'>
                    <img src={mongoLogo} alt="" />
                    <h3>MongoDB</h3>
                </div>
            </div>
        </div>
    );
};

export default Skill;