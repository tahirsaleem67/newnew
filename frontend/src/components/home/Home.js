import React from 'react'
import { Choose } from "./Choose"
import { Intro } from "./Intro"
import { Courses } from "./Courses"
import { Services } from "./Services"
import { Gallery } from "./Gallery"
import { Infrastructure } from "./Infrastructure"
import { Social } from "./Social"
import { Team } from '../team/Team'
import HeroSection from "./HeroSection"
import { Link } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs";

import "./home.css"
import { useSelector } from 'react-redux'


export const Home = () => {

  let cu = useSelector(store => store.userSection.cu)
  return <>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12 col-sm-12'><HeroSection /></div>
          </div>
        </div >
    
    <div className='container-fluid'>
     
      <div className='row'>
        <div className='col-lg-12 col-sm-12'><Choose /></div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'><Intro /></div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'><Courses /></div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'><Services /></div>
      </div>


      <div className='row'>
        <div className='col-lg-12 col-sm-12'><Infrastructure /></div>
      </div>

      <div className='row'>
        <div className='col-lg-12 col-sm-12'><Social /></div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'><Team /></div>
      </div>

      <div className='row'>
        <div className='col-lg-12 col-sm-12'><Gallery /></div>
      </div>
      <Link to="https://wa.me/923067208343">
          <div className='whatsapp-btn'>
            <div className="col-lg-12 whatsapp" >
              <BsWhatsapp></BsWhatsapp>
            </div>

          </div>
        </Link>
    </div>

  </>
}
