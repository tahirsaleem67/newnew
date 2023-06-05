import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaFacebookF, FaFacebookMessenger, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedinIn, FaYoutube, FaSnapchatGhost } from "react-icons/fa";

import './contact.css'
import { useSelector } from 'react-redux';


const Contact = () => {

    let { register, handleSubmit, reset, formState: { errors }, } = useForm();
    let cu = useSelector(store => store.userSection.cu)

    function Message(data) {

        console.log(data);
        reset()

        axios.post("/contact", data).then((res) => {
            try {
                if (res) {
                    toast.success("Send Successfull")
                }
            } catch (e) {
                toast.error("Try Again")
            }
        })

    }
    return (
        <div className='container-fluid'>




            <div className="row my-3 py-5 single-course-heading">
                <div className='black' >

                    <div className="col-lg-12 single-course-h">
                        <h1>Contact Us</h1>
                        <p>Our premium business services have been trusted by businesses of all sizes for years. Contact us today to learn more about how our services can help you reach your business goals.</p>
                    </div>

                </div>
            </div>

            <div className='row'>

                <div className='col-lg-12 '>

                    <h2 className='contact-heading-2'>Keep in   <span>Touch</span> </h2>
                </div>

            </div>


            <div className='row'>
                <div className='col-lg-12'>
                    <div className='contact-icon-box'>
                        <div className='contact-icons'>
                            <FaFacebookF className='gradient'></FaFacebookF>
                            <p>Facebook</p>
                        </div>
                        <div className='contact-icons'>
                            <FaFacebookMessenger></FaFacebookMessenger>
                            <p>Messenger</p>

                        </div>
                        <div className='contact-icons'>
                            <FaInstagram></FaInstagram>
                            <p>Instagram</p>

                        </div>
                        <div className='contact-icons'>
                            <FaWhatsapp></FaWhatsapp>
                            <p>Whatsapp</p>

                        </div>
                        <div className='contact-icons'>
                            <FaTwitter></FaTwitter>
                            <p>Twitter</p>

                        </div>
                        <div className='contact-icons'>
                            <FaLinkedinIn></FaLinkedinIn>
                            <p>Linkedin</p>

                        </div>
                        <div className='contact-icons'>
                            <FaYoutube></FaYoutube>
                            <p>Youtube</p>

                        </div>
                        <div className='contact-icons'>
                            <FaSnapchatGhost></FaSnapchatGhost>
                            <p>Snapchat</p>

                        </div>


                    </div>

                </div>
            </div>



            <div className='row  mt-5'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.1282879300365!2d73.10007157456762!3d31.410591352559443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269c2bfd5d8c9%3A0x19055fb0af7fb7ef!2sWebSquads!5e0!3m2!1sen!2s!4v1684309066403!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0, }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                >

                </iframe>

            </div>

            <div className='row mt-5'>

                <div className='col-lg-12'>

                    <h1 className='contact-form-h-2'>Leave us a Message:</h1>

                </div>

            </div>

            <div className='row'>
                <div className='col-lg-12 '>

                    <div className='contact-form'>

                        <form onSubmit={(Message)}>
                            <div className='contact-form-start'>

                                <input {...register('name', { required: true })} type="text" placeholder='Name *' />
                                <br />
                                {errors.name ? <div className='error'> Name is required * </div> : null}
                                <input {...register('email', {
                                    required: true, validate: function (typedValue) {
                                        if (typedValue.match(
                                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        )) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    }
                                })} type="text" placeholder='Email *' /><br />
                                {errors.email ? <div className='error'> Email is required * </div> : null}


                            </div>

                            <div className='contact-form-start'>

                                <input {...register('subject', { required: true })} type="text" placeholder='Subject *' />
                                <br />
                                {errors.subject ? <div className='error'> Subject is required * </div> : null}

                                <input {...register('number', { required: true })} type="number" placeholder='Phone *' />
                                <br />
                                {errors.number ? <div className='error'> Contact No is required * </div> : null}

                            </div>
                        
                            <div className='contact-form-end'>

                                <textarea {...register('message', { required: true, minLength: 10 })} type="text" placeholder='Message *' />
                                <br />
                                {errors.message ? <div className='error'> Message is required * </div> : null}


                            </div>
                            <div className='contact-form-btn'>

                                <button>Submit</button>


                            </div>


                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact