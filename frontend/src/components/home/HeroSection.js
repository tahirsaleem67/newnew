import React from 'react'
import "./heroSection.css"
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


function HeroSection() {

  let cu = useSelector(store => store.userSection.cu)


  let move = useNavigate()
  return <>
    <div className="container-fluid  hero-bg-img">
      <div className="row row-sytle ">
        <div className="col-lg-6   col-md-6 d-flex flex-column side-row">
          <h3 className='hero-Heading justify-content-start'>
            Transfer Your skills <span>and
              Advance</span> Your Career With
            Our IT Education
          </h3>
          {cu.email != "asd@gmail.com" &&
            <>
              <Button className='btn-enroll mt-3' onClick={() => {
                move('/course')
              }}>Enroll Now</Button>

            </>
          }
          {cu.email === "asd@gmail.com" &&
            <>
              <Button className='btn-enroll mt-3' onClick={() => {
                move('/dashboard')
              }}>Admin</Button>

            </>
          }

          <div className='bg-from mb-5 '>
            <Form className="d-flex my-2 align-items-center">
              <span className='icon-style'><FaSearch /></span>
              <Form.Control
                type="search"
                placeholder="Search"
                className="search-style"
                aria-label="Search"
              />
              <Button className='btn-search'>Explore</Button>
            </Form>
          </div>
        </div>


        <div className="col-lg-6 col-md-6 d-sm-none">

        </div>
      </div>
    </div>
  </>
}

export default HeroSection
