import React from 'react'
import { useNavigate } from 'react-router'

const Amazon = () => {

    let move=useNavigate();
    return (
        <>
            <div className='container-fluid'>


                <div className="row my-3 py-5 single-course-heading">
                    <div className='black' >

                        <div className="col-lg-12 col-sm-12  single-course-h">
                            <h1>Azmazon Assistant</h1>
                            <p>A 4 months Hybrid Web and Mobile PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF HYBRID TECHNOLOGIES.</p>
                            <button className='single-course-btn' onClick={()=>{
                                move('/contact')
                            }}>Enroll Now</button>
                        </div>

                    </div>
                </div>

                <div className="row py-5 ">
                    <div className="col-lg-12 col-sm-12 courses-h">
                        <h1>Detailed Program Structure
                        </h1>
                    </div>
                </div>


            </div>

            <div className="container">
                <div className="row cource-pack ">
                    <div className="col-lg-12  my-3 mx-1 d-flex flex-wrap pack-left">
                        <div className="pack">

                            <div className="row py-4">

                                <h3 className='pack-h'>Front-End Development</h3>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 pack-img">

                                    <img src="html.png" alt="" />
                                </div>
                                <div className="col-lg-8 pack-text">
                                    <p>HTML, CSS are the core of hybrid technologies. Therfore it is essential to grasp the core knowldege with an ability to generate a responsive content in no time.</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-12 my-3 mx-1 d-flex flex-wrap pack-right">
                        <div className="pack">

                            <div className="row py-4">

                                <h3 className='pack-h'>Version Control with Git</h3>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 pack-img">

                                    <img src="git.png" alt="" />
                                </div>
                                <div className="col-lg-8 pack-text">
                                    <p>You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-12  my-3 mx-1 d-flex flex-wrap pack-left">
                        <div className="pack">

                            <div className="row py-4">

                                <h3 className='pack-h'>Programming with Javascript</h3>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 pack-img">

                                    <img src="javascript.jpg" alt="" />
                                </div>
                                <div className="col-lg-8 pack-text">
                                    <p>This module is all about learning programmig using the most flexible programming language Javascript. This will put a base for all your upcoming programming things. We will learn developing apps, games and much more in this module.</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-12 my-3 mx-1 d-flex flex-wrap pack-right">
                        <div className="pack">
                            <div className="row py-4">

                                <h3 className='pack-h'>Designing Components With React</h3>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 pack-img">

                                    <img src="react.jpg" alt="" />
                                </div>
                                <div className="col-lg-8 pack-text">
                                    <p>Designing well-structred components is both a sort of fun and logic, The React framework from Facbook simple does this for us!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12  my-3 mx-1 d-flex flex-wrap pack-left">
                        <div className="pack">
                            <div className="row py-4">

                                <h3 className='pack-h'>Gatsby</h3>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 pack-img">

                                    <img src="nodejs.jpg" alt="" />
                                </div>
                                <div className="col-lg-8 pack-text">
                                    <p>Gatsby is the new beast in Web Developemnt which makes it fairly easy to start making web appliactions in no time.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 my-3 mx-1 d-flex flex-wrap pack-right">
                        <div className="pack">
                            <div className="row py-4">

                                <h3 className='pack-h'>NodejS API Development</h3>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 pack-img">

                                    <img src="html.png" alt="" />
                                </div>
                                <div className="col-lg-8 pack-text">
                                    <p>API development is the core of any distributed applications architecture. NodejS has always been the choice for handling heavy web traffic. So NodejS perfectly gets fit in the puzzle.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Amazon
