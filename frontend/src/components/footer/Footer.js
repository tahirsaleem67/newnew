import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaAngleRight, FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaUserAlt, FaPhoneAlt, FaRegEnvelope, FaArrowAltCircleRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import "./footer.css"
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export const Footer = () => {

  let cu = useSelector(store => store.userSection.cu)
  let move = useNavigate()

  return <>

    {/* <div className='container container_footer'>
      <div className='row'>
        <div className='col-lg-12 col-sm-10 latest'>
          <h1>Get the latest News & Updates</h1>
        </div>
      </div>
      <div className='row contact footer-contact'>
        <div className='col-lg-12 col-sm-12 '>
          <form onSubmit={handleSubmit(Contact)} className='row gap-4 d-flex justify-content-center px-4'>
            <div className='col-lg-3 col-sm-12 footer_form_input'>
              <span className='icon'><FaUserAlt /></span>
              <span>
                <input {...register('name', { required: true })} type="text" placeholder='Full Name' />
              </span>
              {errors.name ? <div className='error'> Name is required * </div> : null}
            </div>

            <div className='col-lg-3 col-sm-12 footer_form_input'>
              <span className='icon'><FaPhoneAlt /></span>
              <span>
                <input {...register('number', { required: true })} type="number" placeholder='Contact No *' />

              </span>
            
              {errors.number ? <div className='error'> Contact Number is required * </div> : null}
            </div>

            <div className='col-lg-3 col-sm-12 footer_form_input'>
              <span className='icon'><FaRegEnvelope /></span>
              <span>
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

              </span>
              {errors.email ? <div className='error'> Email is required * </div> : null}

            </div>
            <div className='col-lg-3 col-sm-12 footer_subscribe'>
              <button>Submit</button>
            </div>

          </form>
        </div>
      </div>

    </div> */}

    <div className='container-fluid footer'>
      <div className='row footer_row'>
        <div className='col-lg-3 imgcol'>
          <img className='footer_logo' src="logo2.png" alt="" /> <br />
          <p>Web Squad Institute offers
            educational services in the field of IT; we also operate as a platform for testing
            services and are partners with relevant authorities..</p>
        </div>
        <div className='col-lg-3 footer_link'>
          <h3 className='footer_link_head'>Important Links</h3>
          <div onClick={() => {
            move('/')
          }}>
            <span><FaAngleRight /></span>  Enquiry Form
          </div>
          <div onClick={() => {
            move('/')
          }}>
            <span><FaAngleRight /></span>  Admission Form
          </div>
          <div onClick={() => {
            move('/')
          }}>
            <span><FaAngleRight /></span>  Certificate Request Form
          </div>
          <div onClick={() => {
            move('/')
          }}>
            <span><FaAngleRight /></span>  Certificate Varification
          </div>
          
        </div>

        <div className='col-lg-3 footer_link' >
          <h3 className='footer_link_head'>Extras</h3>

          <div onClick={() => {
            move('/courses')
          }}>
            <span><FaAngleRight /></span>  Courses
          </div>

          <div onClick={() => {
            move('/gallery')
          }}>
            <span><FaAngleRight /></span>  Gallery
          </div>


          <div onClick={() => {
            move('/services')
          }}>
            <span><FaAngleRight /></span> Services
          </div>


          <div onClick={() => {
            move('/contact')
          }}>
            <span><FaAngleRight /></span> Contact Us
          </div>

        </div>

        <div className='col-lg-3 footer_link cntc'>
          <h3 className='footer_link_head cntc'>CONTAC US</h3>
          <div>
            <h5>Web Squad Institute | Head Office</h5>
          </div>

          <div className='fooetr_cnts'>
            <h6>
              Web Squad Institute, P-165, 1st Floor, 262
              <br />
              Chen one Road, People's Colony No 1 , Faisalabad,
              <br />
              Punjab, Pakistan- 38000
              <br />
              Telephone: +923067207637
              <br />
              Mobile: +923037519796
              <br />
              Email: info@Web Squad.edu.pk
            </h6>
          </div>


        </div>

      </div>

    </div>

    <div className='container-fluid'>

      <div className='row footer2'>
        <div className='col-lg-6 col-sm-12'>
          <p>© 2022 Web Squad  Ltd. All rights reserved.</p>
        </div>
        <div className='col-lg-6 col-sm-12 footer_icon'>
          <div className='facebook'><FaFacebookF /></div>
          <div className='Youtube'><FaInstagram /></div>
          <div className='facebook'><FaLinkedinIn /></div>
          <div className='whatsApp'><FaWhatsapp /></div>
          <div className='twitter'><FaTwitter /></div>
          <div className='Youtube'><FaYoutube /></div>
        </div>
      </div>
    </div>
  </>
}
