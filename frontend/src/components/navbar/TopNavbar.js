import React from 'react'
import "./navbar.css"
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


export default function TopNavbar() {

  let cu = useSelector(store => store.userSection.cu)

  let dispatch = useDispatch()
  let move = useNavigate()

  function Logout() {
    dispatch({
      type: 'LOGOUT_USER'
    });
    toast.success("Logout")
    move('/signin');
  }

  return <>

    {["lg"].map((expand) => (
      <Navbar key={expand} expand={expand} className='bg-backgroud '>
        <div className="container-fluid mx-5 my-2">

          <Navbar.Brand className="brand_main" href="#home"> <img className='brand' src='logo.png' /> </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            className="btn-ss"
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='gap-5'>
              <Nav className="mx-auto gap-4">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/service">Services</Nav.Link>
                <Nav.Link href="/course">Course</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
              <Nav>
                {cu._id != undefined &&

                  <Button onClick={Logout}>LogOut</Button>


                }

                {cu._id == undefined &&
                  <Button onClick={() => {
                    move('/signin')
                  }}>Login</Button>
                }

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    ))}
  </>
}
