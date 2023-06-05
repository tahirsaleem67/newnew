import React, { useEffect, useState } from 'react'
import './service.css'
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Service = () => {


    let [service, setService] = useState([])
    let move = useNavigate()
    useEffect(() => {
        axios.get("/services").then((res) => {
            setService(res.data)
        })

    }, [])

    return (
        <div className='container-fluid'>

            <div className="row my-3 py-5 single-course-heading">
                <div className='black' >

                    <div className="col-lg-12 single-course-h">
                        <h1>Services</h1>
                        <p>Our premium business services have been trusted by businesses of all sizes for years. Contact us today to learn more about how our services can help you reach your business goals.</p>
                    </div>

                </div>
            </div>


            <div className="row py-5">
                <div className="col-lg-12 Services-heading">
                    <h1>We Offered</h1>
                </div>
            </div>


            <div className="row gap-5 mx-4 py-5 d-flex justify-content-center">

                {service.reverse().map((data) => {
                    return <div className="col-lg-4 col-sm-12 col-md-6 service-box coures-box" onClick={() => {

                        const lowercaseTitle = data.title.toLowerCase();

                        if (lowercaseTitle.includes('web')) {
                            move('/web');
                        } else if (lowercaseTitle.includes('seo')) {
                            move('/seo');
                        } else if (lowercaseTitle.includes('amazon')) {
                            move('/amazon');
                        } else if (lowercaseTitle.includes('marketing')) {
                            move('/marketing');
                        } else if (lowercaseTitle.includes('graphic')) {
                            move('/graphic');
                        }
                    }}>
                        <div className="coures-img service-img">
                            <img src={data.pic} alt="" />
                        </div>
                        <div className="coures-detail services-detail">
                            <p>{(data.title.slice(0, 35))}</p>
                            <p>{(data.description.slice(0, 100))}....</p>
                            <div className=' d-flex gap-2 align-items-center py-2'>
                                <div className='mt-1'>8.4</div>
                                <div className='coures-star'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                                </div>
                                <div>(9898)</div>
                            </div>
                            <Link><button>Get Detail</button></Link>
                            {/* <Link ><button>Admin</button></Link> */}
                        </div>
                    </div>
                })

                }
            </div>
        </div>
    )
}

export default Service
