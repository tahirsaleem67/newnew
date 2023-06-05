import React, { useState } from 'react';
import {
  FaUserAlt,
  FaDiscourse,
  FaServicestack,
  FaCameraRetro,
  FaEnvelope,
  FaPowerOff,
  FaSearch
} from 'react-icons/fa';
import { Users } from './Users';
import { CoursesList } from './CoursesList';
import { ServiceList } from './ServiceList';
import { MessageList } from './MessageList';
import { GalleryList } from "./GalleryList"
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('users');
  let cu = useSelector(store => store.userSection.cu)
  let move = useNavigate()
  let dispatch = useDispatch()
  const handleClick = (component) => {
    setActiveComponent(component);
  };
  function Logout() {
    dispatch({
      type: 'LOGOUT_USER'
    });
    toast.success("Logout")
    move('/signin');
  }
  const renderComponent = () => {
    switch (activeComponent) {
      case 'users':
        return <Users />;
      case 'courses':
        return <CoursesList />;
      case 'services':
        return <ServiceList />;
      case 'gallery':
        return <GalleryList />;
      case 'messages':
        return <MessageList />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container-fluid mb-4">
       
        <div className='row dash_topbar mb-4 '>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <input type="Search" placeholder='Search AnyThing' /> <span className='search'><FaSearch /></span>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-6 d-flex topbar_detail'>
            <div>
             <b>Admin:</b> {cu.name}
            </div>
            <div className='topbar_img_box'>
              <img src={cu.pic} alt="" />
            </div>
            <div className='topbar_icon' onClick={Logout}>
              <FaPowerOff />
            </div>
          </div>
        </div>
        <div className="row dash_cont mb-4">
          <div className="col-lg-12 col-sm-12 mb-4">
            <h1 className="dash_heading">Dashboard</h1>
          </div>
          <div className="row card_Row">
            <div
              className="col-lg-3 col-md-5 col-sm-12 mb-4 dash_card"
              onClick={() => handleClick('users')}
            >
              <div className='dash_card_box'>
                <div className="dash_card_icon">
                  <FaUserAlt />
                </div>
                <div>
                  <p>Total Users</p>
                  <p>150</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-5 col-sm-12 mb-4 dash_card"
              onClick={() => handleClick('messages')}
            >
              <div className='dash_card_box'>

                <div className="dash_card_icon">
                  <FaEnvelope />
                </div>
                <div>
                  <p>Enrolled Users</p>
                  <p>100</p>
                </div>
              </div>
            </div>
            
            <div
              className="col-lg-3 col-md-5 col-sm-12 mb-4 dash_card"
              onClick={() => handleClick('courses')}
            >
              <div className='dash_card_box'>
                <div className="dash_card_icon">
                  <FaDiscourse />
                </div>
                <div>
                  <p>Courses</p>
                  <p>50</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-5 col-sm-12 mb-4 dash_card"
              onClick={() => handleClick('services')}
            >
              <div className='dash_card_box'>

                <div className="dash_card_icon">
                  <FaServicestack />
                </div>
                <div>
                  <p>Services</p>
                  <p>50</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-5 col-sm-12  mb-4 dash_card"
              onClick={() => handleClick("gallery")}
            >
              <div className='dash_card_box'>

                <div className="dash_card_icon">
                  <FaCameraRetro />
                </div>
                <div>
                  <p>Gallery</p>
                  <p>50</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-5 col-sm-12 mb-4 dash_card"
              onClick={() => handleClick('messages')}
            >
              <div className='dash_card_box'>

                <div className="dash_card_icon">
                  <FaEnvelope />
                </div>
                <div>
                  <p>Messages</p>
                  <p>100</p>
                </div>
              </div>
            </div>


          </div>
        </div>
        {/* {cu.email != "asd@gmail.com" &&
          <>
            <div className='row user_row'>
              <div className='col-lg-2 col-md-6 col-sm-12 user_col_img'>
                <div className='user_pic'>
                  <img src={cu.pic} alt="" />
                </div>
              </div>
              <div className='col-lg-10 col-md-6 col-sm-12'>
                <div className='user_detail'>
                  <p>Welcome to profile Dear {cu.name}</p>
                </div>
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12 mt-2'>
                <div className='timeline'>
                  <h1>TimeLine:</h1>
                </div>
              </div>
               <div className="row gap-0">
                <div className="col-lg-3 col-md-3 col-sm-3">
                <div className='user_timeline_detail '>
                          <p>Name:</p>
                        </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                <div className='user_timeline_detail '>
                          <p>{cu.name}</p>
                        </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                <div className='user_timeline_detail '>
                          <p>Email:</p>
                        </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                <div className='user_timeline_detail '>
                          <p>{cu.email}</p>
                        </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                <div className='user_timeline_detail '>
                          <p>Contact:</p>
                        </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                <div className='user_timeline_detail '>
                          
                <p>{cu.number}</p>
                          
                        </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                <div className='user_timeline_detail '>
                <p>Education:</p>
                          
                          
                        </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                <div className='user_timeline_detail '>
                <p>{cu.education}</p>
                          
                        </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                <div className='user_timeline_detail '>
                  <p>Password:</p>
                
                        </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                <div className='user_timeline_detail '>
                <p>{cu.password}</p>
                        </div>
                </div>
              </div>
            </div> 
          </>
        }
*/}
        <div className="row">
          <div className="col-lg-12 col-sm-12">{renderComponent()}</div>
        </div>
      </div >

    </>
  );
};
