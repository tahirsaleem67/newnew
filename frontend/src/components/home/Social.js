import React from 'react'
import { FaFacebook, FaRocketchat, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedinIn, FaYoutube, FaSnapchatGhost } from "react-icons/fa";

import "./social.css"



export const Social = () => {
    return <>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className='col-lg-12'>
                    <h1 className='about-heading'>Social Media <span>Presence</span> </h1>
                </div>

                <div className='d-flex gap-3  container-fluid contant-menu'>
                    <div class="social-icon text-center">
                        <a href="https://facebook.com/careerinstituteofficial" target="_blank" >
                            <FaFacebook />
                            {/* <p>Facebook</p> */}
                        </a>
                    </div>
                    <div class="social-icon text-center">
                        <a href="https://facebook.com/careerinstituteofficial" target="_blank" >
                            <FaRocketchat />
                        </a>
                    </div>
                    <div class="social-icon text-center">
                        <a href="https://facebook.com/careerinstituteofficial" target="_blank" >
                            <FaInstagram />
                        </a>
                    </div>
                    <div class="social-icon text-center">
                        <a href="https://facebook.com/careerinstituteofficial" target="_blank" >
                            <FaWhatsapp />
                        </a>
                    </div>
                    <div class="social-icon text-center">
                        <a href="https://facebook.com/careerinstituteofficial" target="_blank" >
                            <FaTwitter />
                        </a>
                    </div>
                    <div class="social-icon text-center">
                        <a href="https://facebook.com/careerinstituteofficial" target="_blank" >
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div class="social-icon text-center">
                        <a href="https://facebook.com/careerinstituteofficial" target="_blank" >
                            <FaYoutube />
                        </a>
                    </div>
                    <div class="social-icon text-center">
                        <a href="https://facebook.com/careerinstituteofficial" target="_blank" >
                            <FaSnapchatGhost />
                        </a>
                    </div>
                </div>



            </div>
        </div>

    </>
}
