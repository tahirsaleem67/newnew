import React from 'react'
import "./intro.css"


export const Intro = () => {
  return <>

    <div className='container-fluid my-5'>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'>

          <div class="wrap">
            <div class="parallax">


              <div className="container my-5">
                <div className="row intro-container">
                  <div className="col-lg-3 image-box-1">
                    <img src="Talha3.jpeg" alt="" />
                  </div>
                  <div className="col-lg-6 intro-text">
                    <p >  My aim is to educate the leaders of enterprises. I believe these leaders contribute to create a difference to their organizations and to the world around them.</p>
                    <p className='intro-text-1'>Adeel Javaid - Founder & CEO</p>
                  </div>
                  <div className="col-lg-3 image-box-2">
                    <img src="Talha2.jpeg" alt="" />
                  </div>
                </div>
              </div>



            </div>

          </div>
        </div>
      </div>
    </div>

  </>
}
