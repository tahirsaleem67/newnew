import React from 'react'
import { useForm } from 'react-hook-form';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'react-phone-number-input/style.css'
import { FaRegUser, FaGraduationCap, FaCamera, FaPhoneAlt, FaRegEnvelope, FaLock } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./signUp.css"


const SignUp = () => {

    let { register, handleSubmit, reset, formState: { errors }, } = useForm();

    let cu = useSelector(store => store.userSection.cu)

    let move = useNavigate()

    function Signup(data) {

        console.log(data);

        let meraForm = new FormData();
        meraForm.append("name", data.name)
        meraForm.append("education", data.education)
        meraForm.append("email", data.email)
        meraForm.append("password", data.password)
        meraForm.append("number", data.number)
        meraForm.append("pic", data.pic[0])

        axios.post("/signupUser", meraForm).then((resp) => {
            toast.success("Account Created")
            move('/signin')
            reset();
        }).catch((resp) => {
            toast.error("User Already Exist")
        })
    }
    return <>

        <div className="sign-up my-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6 col-md-12 signup-image">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2700,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper-image"
                        >
                            <SwiperSlide> <img src="soft3.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img src="soft3.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img src="soft3.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img src="soft3.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-lg-6 col-md-12 ">
                        <div className="row d-flex  justify-content-center">
                            <h2 className='mt-2 mb-4 h2-clr'>Join The Community Of Modern Thinking Students !</h2>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-sm-12'>
                                <form onSubmit={handleSubmit(Signup)}>
                                    <div className='row gap-3 mt-0'>
                                        <div className='col-lg-6 col-sm-6 signup_input_main ' >
                                            <span><FaRegUser /></span>
                                            <input {...register('name', { required: true })} type="text" placeholder='Name *' />
                                            <br />
                                            <div>
                                                {errors.name ? <div className='error'> Name is required * </div> : null}
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-sm-6 signup_input_main'>
                                            <span><FaGraduationCap /></span>
                                            <select {...register('education', {

                                                required: true, validate: function (selectedValue) {

                                                    if (selectedValue == "Select Course") {
                                                        return false;
                                                    } else {
                                                        return true;
                                                    }

                                                }
                                            })}>
                                                <option value="">Select Education *</option>
                                                <option value="Matric">Matric</option>
                                                <option value="Intermediate">Intermediate</option>
                                                <option value="Bachelor">Bachelor</option>
                                                <option value="Master">Master</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {errors.education ? <div className='error'> Select each Course * </div> : null}

                                        </div>
                                    </div>



                                    <div className='row gap-3 mt-5'>
                                        <div className='col-lg-6 col-sm-6 signup_input_main' >
                                            <span><FaPhoneAlt /></span>
                                            <input {...register('number', { required: true })} type="number" placeholder='Contact No *' />
                                            {errors.number ? <div className='error'> Number is required * </div> : null}

                                        </div>
                                        <div className='col-lg-6 col-sm-6 signup_input_main' >
                                            <span><FaRegEnvelope /></span>
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
                                            })} type="text" placeholder='Email *' />

                                            {errors.email ? <div className='error'> Email is required * </div> : null}

                                        </div>
                                    </div>

                                    <div className='row gap-3 mt-5'>
                                        <div className='col-lg-6 col-sm-6 signup_input_main ' >
                                            <span><FaLock /></span>
                                            <input {...register('password', { required: true, minLength: 4 })} type="password" placeholder='Password *' />
                                            {errors.password && errors.password.type == 'required' ? <div className='error'>Please Enter your password</div> : null}
                                            {errors.password && errors.password.type == 'minLength' ? <div className='error'>Password Should not be less than 4 characters</div> : null}

                                        </div>
                                        <div className='col-lg-6 col-sm-6 signup_input_main d-flex' >
                                            <span><FaCamera /></span>
                                            <input {...register('pic')} type="file" placeholder='Contact No *' />
                                            <br /> {errors.pic ? <div className='error'> Pic is required * </div> : null}
                                        </div>
                                    </div>
                                    <div className='row my-4'>
                                        <div className='col-lg-3 col-sm-3'>
                                            <button className='signup_btn'>Submit</button>
                                        </div>
                                        <div className='col-lg-3 col-sm-3 mt-2 signup_btn2'>
                                            <Link to="/signin"><span className='signup_btn_style'>Login</span> </Link>
                                        </div>

                                    </div>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignUp
