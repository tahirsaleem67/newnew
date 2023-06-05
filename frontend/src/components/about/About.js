import React from 'react'
import './about.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsLaptop } from "react-icons/bs";
import { RiCupFill } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { FaTree } from "react-icons/fa";
const About = () => {
    return (
        <div>





            <div className='container-fluid'>

                <div className="row my-3 py-5 single-course-heading">
                    <div className='black' >

                        <div className="col-lg-12 single-course-h">
                            <h1>About Us</h1>
                            <p>Our premium business services have been trusted by businesses of all sizes for years. Contact us today to learn more about how our services can help you reach your business goals.</p>
                        </div>

                    </div>
                </div>



                <div className="row ">


                    <div className="col-lg-6 col-md-12 about-image ">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2700,
                                disableOnInteraction: false,
                            }}


                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper about-swiper"
                        >
                            <SwiperSlide> <img src="images/1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img src="images/2.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img src="images/3.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img src="images/4.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img src="images/5.jpg" alt="" /></SwiperSlide>

                        </Swiper>


                    </div>
                    <div className="col-lg-6 col-md-12 about-us-text">

                        <h1> <span> We are</span> Future of Education</h1>
                        <p>Since our origin from 2010, we have possessed the capacity to appreciate ourselves as the main IT organizations in Pakistan; we have been conveying our best among the understudies and have figured out how to make esteems among them which will make them prepared for their future. We have additionally centered on the improvement of the specialized and also the social abilities of our understudies and have figured out how to prepare in excess of 7000 understudies.</p>

                        <div className="bio-data-stats">
                            <div className="bio-stats">
                                <h3>Exact Sciences</h3>
                                <div className="bio-progress-bar">
                                    <span>80%</span>
                                </div>
                            </div>
                            <div className="bio-stats">
                                <h3>Technologies</h3>
                                <div className="bio-progress-bar bio-progress-2">
                                    <span>99%</span>
                                </div>
                            </div>
                            <div className="bio-stats">
                                <h3>Languages</h3>
                                <div className="bio-progress-bar bio-progress-3">
                                    <span>90%</span>
                                </div>
                            </div>
                            <div className="bio-stats">
                                <h3>Humanities</h3>
                                <div className="bio-progress-bar bio-progress-4">
                                    <span>85%</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div className="container-fluid about-chart">

                <div className="row gap-5 mx-1 py-5 d-flex justify-content-center chart-row">
                    <div className="col-lg-3 col-sm-12 about-chart-box">

                        <div className='about-chart-icon'><BsLaptop></BsLaptop></div>
                        <h2>Teaching in <br /> Digital <br />
                            Classroom</h2>
                        <p>where a physical <br /> classroom extends into a digital space
                        </p>
                    </div>
                    <div className="col-lg-3 col-sm-12 about-chart-box">
                        <div className='about-chart-icon'><RiCupFill></RiCupFill></div>
                        <h2>We Arrange Many Meetings & <br /> Meetup</h2>
                        <p>Meetings & Meetup We are what we do    </p>
                    </div>
                    <div className="col-lg-3 col-sm-12 about-chart-box">
                        <div className='about-chart-icon'><BiDollar></BiDollar></div>
                        <h2>
                            Tuition Fee <br /> Waiver Scholarships</h2>
                        <p>All applicants who meet and qualifies the scholarship requirements can study on a waiver scholarships.</p>
                    </div>
                    <div className="col-lg-3 col-sm-12 about-chart-box">
                        <div className='about-chart-icon'><FaTree></FaTree></div>
                        <h2>Natural Compass & Playground</h2>
                        <p>We used the concept and an element of playground to introduce and boost, such as fitness benefits with regular maintenance to keeping on top of the situation.</p>
                    </div>
                </div>
            </div>


            <div className='container-fluid'>
            <div className="row">
                    <div className='col-lg-12 '>
                        <h1 className='about-heading-3'>Meet Our <span>CEO's</span> </h1>
                    </div>
                </div>

                <div className='row about-intro' >
                    <div className="col-lg-5 about-intro-img">

                        <img src="Talha2.jpeg" alt="" />

                    </div>
                    <div className="col-lg-7 about-intro-text">

                        <h1>Muhammad Talha</h1>
                        <h3>Chief Executive Officer & Co-Founder</h3>
                        <i> <p>There are huge challenges in today’s global and highly <br /> competitive <br />
                            markets and we have to ensure that you are ready for them.</p></i>

                    </div>

                </div>

                <div className="row about-detail">
                    <p>We are in the middle of technological advancements and revolution’s, the changing aptitude of world and the increase in the technological advancement persuaded me to take an initiative and build something that will not only contribute in the world of technology but will also enable to serve the talent with right path and career opportunities. Being the IT professional and a busi-ness man I found it that only an institute can build and emerge the students as the shining stars of future especially in the field of technology. So I decided to be the pioneer to initiate a platform where we will not only produce IT skilled students but will turn them into IT specialist through counseling, education and research.</p>
                    <p>I believe that IT industries are the future leaders but every field requires the perfect aptitude for their future developers and lea-ers, so in Career Institute we not only work on our students technically but also help them improve their communication, deliver-ance and presentation. We let our students ponder over variety of ideas and give them the confidence to build their ideas into the reality and from reality transforming them into virtual reality, because this is where the future will be existing, My aim is to build the technological advancement in Pakistan and to further excel the exposure of my Career team and my students on an international level. Being the leader I believe that this is my utmost responsibility that our students when leave Career belongs to a strong and sound positions of their Careers.</p>
                    <p>At Career Institute we use all the best possible methods for teaching and trainings; we have fully equipped labs, Access to the fa-cility of online libraries, 24/7 facility of a trainer or instructor. Our environment is suitable for our students as we have program co-ordinators and Career counselors every time available for them in case of any confusion’s or issues. Career Institute does not only provide educational opportunities but my vision also include in providing employment opportunities to the deserved ones who wish to excel their careers in the field of IT and other relevant areas.</p>
                    <p>Being a Cisco Academy Support center Career Institute has also served our students in the field of networking, I am thankful to Cisco that they have given us an immense opportunity to serve our students and as well as other local academies with the in-structor trainings, environment, equipment’s and much more. Career Institutes has already done and will keep on motivating our students, academies and other affiliated institutes to serve the community with education, excellence and success. We wish that our education and trainings will be enhancing the knowledge of our current students now and for generations to come.</p>
                </div>

            </div>
        </div>
    )
}

export default About