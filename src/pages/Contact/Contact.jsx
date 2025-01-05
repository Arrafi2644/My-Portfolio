
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_7vs5frb', 'template_59docfb', form.current, {
          publicKey: 'TGXcUC5YcaDhNZe0e',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div id='contact' className='my-4 md:my-8 lg:my-12 py-10 '>
            <p className='font-medium text-center text-primary mb-1'>Contact</p>
            <h2 className='text-3xl md:text-4xl font-bold font-merriweather text-center '>Contact With Me</h2>

            <div className='flex flex-col lg:flex-row gap-6 pt-10 font-medium'>
                <div className='border w-full md:w-2/5 p-12 rounded-md'>
                    <div>
                    <h2 className='text-3xl font-bold font-merriweather mb-2 text-center md:text-left'>Md Ar Rafi Fayez Joy</h2>
                    <p className='text-center md:text-left'>I am available for freelance work. Connect with me via and call in to my account.</p>
                    </div>

                    <div className='mt-6'>
                        <Link  className='flex items-center gap-2 hover:underline hover:text-primary w-max'> <FaPhone></FaPhone> 01751166818</Link>
                        <Link className='flex items-center gap-2 hover:underline hover:text-primary w-max' ><FaWhatsapp></FaWhatsapp> 01751166818</Link>
                        <Link className='flex items-center gap-2 hover:underline hover:text-primary w-max'><FaMailBulk></FaMailBulk> raffian2644@gmail.com</Link>


                    </div>
                    <div className='mt-6'>
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
                <div className='border w-full md:w-3/5 p-6 rounded-md'>
                <form ref={form} onSubmit={sendEmail} className="card-body grid grid-cols-1 md:grid-cols-2">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name="from_name" type="text" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input name='number' type="text" placeholder="Phone number" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="from_email" type="email" placeholder="Your email" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input name='subject' type="text" placeholder="Subject" className="input input-bordered" required />
                        </div> */}
                      
                   
                        <div className="form-control col-span-1 md:col-span-2">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            {/* <input type="text"  className="input input-bordered" required /> */}
                            <textarea  name="message" className="textarea  resize-none border-gray-300
                             " placeholder="Your message" required></textarea>
                        </div>
                        
                        
                        <div className="form-control mt-6 col-span-1 md:col-span-2">
                            <input className='btn bg-primary' type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;