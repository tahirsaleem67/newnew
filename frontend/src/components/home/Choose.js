import React from 'react'
import { FaUserAlt,FaGraduationCap,FaAffiliatetheme,FaStar } from "react-icons/fa";
import "./choose.css"

export const Choose = () => {
  return <>
    <div className='container-fluid my-5'>

      <div className='row'>
      <div className='col-lg-12 col-sm-12 mb-4'>
                    <h1 className='about-heading'>Why Choose <span>Us</span> </h1>
                </div>
      </div>

      <div className='row choose_row1'>

        <div className='col-lg-3 col-md-6  col-sm-10 choose_card'>
          <div className='choose_card_start'>
            <div className='choose_icon'>
              <FaGraduationCap/>

            </div>
            {/* <div className='choose_img'>
              <img src="21.png" alt="" />
            </div> */}
            <div className='choose_card_deatail'>
              <h1>25000+</h1>
              <p>Alumni</p>
            </div>
          </div>
        </div>

        <div className='col-lg-3 col-md-6  col-sm-10 choose_card'>
          <div className='choose_card_start'>
          <div className='choose_icon'>
              <FaAffiliatetheme/>

            </div>
            {/* <div className='choose_img'>
              <img src="22.png" alt="" />
            </div> */}
            <div className='choose_card_deatail'>
              <h1>25+</h1>
              <p>International Affiliatio</p>
            </div>
          </div>
        </div>


        <div className='col-lg-3 col-md-6  col-sm-10 choose_card'>
          <div className='choose_card_start'>
            <div className='choose_img'>
              {/* <img src="23.png" alt="" /> */}
              <div className='choose_icon'>
                <FaStar />
              </div>
            </div>
            <div className='choose_card_deatail'>
              <h1>150+</h1>
              <p>Available Courses</p>
            </div>
          </div>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 choose_card'>
          <div className='choose_card_start'>
            <div className='choose_img'>
              {/* <img src="24.png" alt="" /> */}
              <div className='choose_icon'>
                <FaUserAlt />
              </div>
            </div>
            <div className='choose_card_deatail'>
              <h1>200+</h1>
              <p>Success Fully Project</p>
            </div>
          </div>
        </div>


      </div>


      <div className='row choose_row3 my-5' >
        <div className='col-lg-5 col-sm-12'>
          <div className='choose_img_intro'>
            <img src="25.png" alt="" />
          </div>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <div>
            <h2>About Web Squad</h2>
            <p>
              <strong>Since 2010, Career Institute</strong>
              has been the leading Institute of Business, Security and Information Technology worldwide. We’ve trained growing number of 1 million students worldwide by providing up-to-date course content,
              experienced and certified trainers to facilitate our valuable students in achieving professional excellence.</p>
          </div>
        </div>
      </div>
    </div>

  </>
}
