import React from 'react'
import "./team.css"

export const Team = () => {

    let pic = [
        {
            pic: "Talha1.jpeg",
            title: "Muhammad Talha",
            desc: "CEO & Founder"
        },
        {
            pic: "60111.jpg",
            title: "Ali Rajpoot",
            desc: "CEO & Co-Founder"
        },
        {
            pic: "haris.jpeg",
            title: "Haris Khan",
            desc: "Front End Developer"
        },
      
        {
            pic: "sharjeel.jpeg",
            title: "Sharjeel Akhtar",
            desc: "MERN Stack Developer"
        },
        {
            pic: "tahir.jpg",
            title: "Tahir Saleem",
            desc: "MERN Stack Developer"
        },
        {
            pic: "uzair.jpeg",
            title: "Uzair Ahmad",
            desc: "Front End Developer"
        }
    ]

    return <>

        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-sm-12 text'>
                    <h1>Meet Our Leadership</h1>
                    <p>Our team is passionate about delivering the best services and results for <br /> our customers. Come check us out and get to know the people behind
                        <br />   the scenes that make it all possible.</p>
                </div>

            </div>

            <div className='row mt-4 team_row'>
                {pic.map((data) => {
                    return <div className='col-lg-4 col-md-6 col-sm-12 team_col mb-5'>
                        <div className='team_main'>
                            <div className='team_img_main'>
                                <img src={data.pic} alt="" />
                            </div>
                            <div className='team-detail mt-3'>
                                <h3>{data.title}</h3>
                                <p className='mt-2'>{data.desc}</p>
                            </div>
                        </div>
                    </div>
                })}

                
            </div>
        </div>

    </>
}
