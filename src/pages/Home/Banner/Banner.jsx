import React from 'react';
import bannerImg from '../../../assets/banner-person.png'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import resume from '../../../../src/resume/Ar_Rafi_Fayez_Joy_cv-for-web-developer.pdf'

const Banner = () => {
    return (
        <div className="hero min-h-screen font-open-sans">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=' lg:w-1/3 mx-auto'>
                    <img src={bannerImg} alt="" />
                </div>
                <div className=' w-full lg:w-2/3 text-center lg:text-left'>
                    <p className='mb-3 font-open-sans uppercase'>Welcome to my world</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal font-merriweather">Hi i'm <br /> <span className='text-primary'>Md. Ar Rafi Fayez Joy</span> <br /> a Frontend Developer.</h1>
                    <p className="py-6 font-open-sans">
                        I specialize in creating modern, user-friendly, and responsive web applications with clean code and a passion for innovative design.
                    </p>
                    <div className='flex gap-2 items-center justify-center lg:justify-start'>
                        {/* <Link to='https://app.enhancv.com/share/8a1888bb/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic'><button className="btn bg-primary hover:scale-95">View Resume</button></Link> */}

                        <a href='https://app.enhancv.com/share/8a1888bb/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic' target='_blank' className="btn bg-primary hover:scale-95">View Resume</a>

                        <a className="btn bg-primary hover:scale-95" href={resume} download='cv'>Download cv</a>

                    </div>
                    <div className='mt-4'>
                        <p className='text-sm font-medium uppercase'>Find With Me</p>
                        <div className='flex items-center gap-2 my-2 justify-center md:justify-start'>
                            <a href='https://www.facebook.com/arrafi.rafi.1238' target='_blank' className='text-2xl p-4
                                                    border hover:bg-primary transition-all duration-200 rounded-md hover:scale-95'><FaFacebook></FaFacebook></a>
                            <a href='https://github.com/Arrafi2644' target='_blank' className='text-2xl p-4
                                                    border hover:bg-primary transition-all duration-200 rounded-md hover:scale-95 '><FaGithub></FaGithub></a>
                            <a href='https://www.linkedin.com/in/md-ar-rafi-fayez-joy-06a9b5289/' target='_blank' to={'https://www.facebook.com/arrafi.rafi.1238'} className='text-2xl p-4
                                                    border hover:bg-primary transition-all duration-200 rounded-md hover:scale-95'><FaLinkedin></FaLinkedin></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;