import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaDiscourse,
  FaServicestack,
  FaCameraRetro,
  FaHome,
  FaQq
} from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { SiAboutdotme } from "react-icons/si";
import { Dashboard } from './Dashboard';
import { AddCourse } from "./AddCourse"
import { AddService } from './AddService';
import { AddGallery } from "./AddGallery"

import "./sidebar.css"
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const toggle = () => setIsOpen(!isOpen);
  let cu = useSelector(store => store.userSection.cu)
  let dispatch = useDispatch()

  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  function Logout() {
    dispatch({
      type: 'LOGOUT_USER'
    });
    toast.success("Logout")
    move('/signin');
  }
  let move = useNavigate()

  return (
    <div className="container-fluid sidebarinfo">
      <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Web Squad
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <div className={`link ${activeComponent === 'dashboard' ? 'active' : ''}`} onClick={() => handleMenuClick('dashboard')}>
          <div className="icon">
            <FaTh />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            Dashboard
          </div>
        </div>

        <div className={`link ${activeComponent === 'addCourse' ? 'active' : ''}`} onClick={() => handleMenuClick('addCourse')}>
          <div className="icon">
            <FaDiscourse />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            Add Courses
          </div>
        </div>


        <div className={`link ${activeComponent === 'addService' ? 'active' : ''}`} onClick={() => handleMenuClick('addService')}>
          <div className="icon">
            <FaServicestack />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            Add Service
          </div>
        </div>

        <div className={`link ${activeComponent === 'addGallery' ? 'active' : ''}`} onClick={() => handleMenuClick('addGallery')}>
          <div className="icon">
            <FaCameraRetro />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            Add Gallery
          </div>
        </div>


        <div className="my-2">
          <div style={{ display: isOpen ? 'block' : 'none' }} className="extra">
            Extra Links
          </div>
        </div>

        <div className="link" onClick={() => {
          move("/")
        }}>
          <div className="icon">
            <FaHome />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text" >
            Home
          </div>
        </div>
        <div className="link" onClick={() => {
          move("/about")
        }}>
          <div className="icon">
            <SiAboutdotme />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text" >
            About Us
          </div>
        </div>

        <div className="link" onClick={() => {
          move("/contact")
        }}>
          <div className="icon">
            <FaHome />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text" >
            Conatct Us
          </div>
        </div>

        <div className="link" onClick={() => {
          move("/course")
        }}>
          <div className="icon">
            <FaDiscourse />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            Courses
          </div>
        </div>

        <div className="link" onClick={() => {
          move("/service")
        }}>
          <div className="icon">
            <FaServicestack />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text" >
            Services
          </div>
        </div>

        <div className="link mb-5">
          <div className="icon">
            <BiLogOut />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text" onClick={Logout}>
            Logout
          </div>
        </div>



      </div>

      <div className="dashboard">
        {activeComponent === 'dashboard' && <Dashboard />}
        {activeComponent === 'addCourse' && <AddCourse />}
        {activeComponent === 'addService' && <AddService />}
        {activeComponent === 'addGallery' && <AddGallery />}
      </div>
    </div>
  );
};

export default Sidebar;
