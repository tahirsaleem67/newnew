import React, { useEffect, useState } from 'react';
import './courses.css';
import Slider from 'react-slick';
import { FaStar } from "react-icons/fa";
import axios from 'axios';


export const Services = () => {


    let [services, setServices] = useState([])

    useEffect(() => {
        axios.get("/services").then((res) => {
            setServices(res.data)
        })

    }, [])
    var settings = {
        dots: true,

        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };
    return (
        <div className="courses-container">
            <div className="coures-text">
                <h1>
                    <span> Services</span>
                </h1>
                <p>
                    Learn at the comfort of your own home - Enhance Your Skills & Get the
                    Job.
                </p>
            </div>
            <div className="courses-slider-container">
                <Slider {...settings}>
                    {services.slice(0, 15).reverse().map((data) => {
                        return <div className="coures1">
                            <div className="coures-box">
                                <div className="coures-img">
                                    <img src={data.pic} alt="" />
                                </div>
                                <div className="coures-detail">
                                    <p>{(data.title.slice(0, 35))}</p>
                                    <p>{(data.description.slice(0, 100))}....</p>
                                    <div className=' d-flex gap-2 align-items-center py-2'>
                                        <div className='mt-1'>8.4</div>
                                        <div className='coures-star'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                                        </div>
                                        <div>(9898)</div>
                                    </div>
                                    <button>Get Detail</button>
                                </div>
                            </div>
                        </div>
                    })

                    }
                </Slider>
            </div>
        </div>
    );
};
