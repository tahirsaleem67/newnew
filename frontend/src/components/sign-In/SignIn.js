import React, { useState } from 'react';
import { Home } from '../home/Home';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./sign-in.css";

const SignIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const move = useNavigate();

    const Login = async (data) => {
        try {
            const response = await axios.post('/login', data);
            const loginUser = response.data;

            if (loginUser) {
                localStorage.setItem('meraToken', loginUser.myToken);
                if (loginUser.userMilgya.email === "asd@gmail.com") {

                    toast.success("Welcome back dear Admin");
                    dispatch({
                        type: "LOGIN_USER",
                        payload: loginUser.userMilgya
                    });
                    move('/dashboard');
                } else if (loginUser.userMilgya.email != "asd@gmail.com") {
                    toast.success("Welcome back dear " + loginUser.userMilgya.name);
                    dispatch({
                        type: "LOGIN_USER",
                        payload: loginUser.userMilgya
                    });
                    move('/dashboard');
                } else {
                    toast.error("Invalid credentials. Please try again.");

                }
            }
        } catch (error) {
            console.log(error);
            toast.error("Invalid credentials. Please try again.");
        }
        reset();
    };

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
                        <div className="row mt-3 mx-4">
                            <h2 className='mt-2 mb-4 h2-clr'>Join The Community Of Modern Thinking Students !</h2>
                            <form onSubmit={handleSubmit(Login)}>
                                <div className='col-lg-12 col-sm-12 login_input_main' >
                                    <span><FaEnvelope /></span>
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
                                <div className='col-lg-12 col-sm-12 login_input_main mt-4 ' >
                                    <span><FaLock /></span>
                                    <input {...register('password', { required: true, minLength: 4 })} type="password" placeholder='Password *' />
                                    {errors.password && errors.password.type == 'required' ? <div className='error'>Please Enter your password</div> : null}
                                    {errors.password && errors.password.type == 'minLength' ? <div className='error'>Password Should not be less than 4 characters</div> : null}

                                </div>
                                <div className='row my-4'>
                                    <div className='col-lg-3 col-sm-3'>
                                        <button className='signup_btn'>Login</button>
                                    </div>
                                    <div className='col-lg-3 col-sm-3 mt-2 signup_btn2'>
                                        <Link to="/signup"><span className='signup_btn_style'>SignUp</span> </Link>
                                    </div>

                                </div>
                            </form>
                        </div>


                    </div>
                </div>

            </div>

        </div>

        {/* <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-sm-12'><Home /></div>
            </div>

        </div> */}
    </>
}

export default SignIn
