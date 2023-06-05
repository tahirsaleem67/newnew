import React from 'react'
import {
  FaTextHeight,
  FaCamera,
} from "react-icons/fa";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export const AddService = () => {

  let { register, handleSubmit, reset, formState: { errors }, } = useForm();

  let cu = useSelector(store => store.userSection.cu)

  function Service(data) {

    console.log(data);

    let meraForm = new FormData();
    meraForm.append("title", data.title)
    meraForm.append("description", data.description)
    meraForm.append("pic", data.pic[0])

    axios.post("/services", meraForm).then((res) => {
      try {
        if (res) {
          toast.success("Service Added")
          reset()
        }
      } catch (e) {
        toast.error("Try Again")
      }
    })

  }
  return <>
    <div className='continer Add_course'>
      <div className='row mb-4'>
        <div className='col-lg-12 col-sm-12'>
          <h1 className='users_head'>Add Service Detail</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'>
          <form onSubmit={handleSubmit(Service)}>
            <div className='row addcourse_form'>
              <div className='col-lg-6 col-sm-12 mb-5'>
                <div className='addCourse_detail d-flex'>
                  <div className='detail_icon'><FaTextHeight /></div>
                  <input  {...register('title', { required: true })} type="text" placeholder='Title Here*' />
                </div>
                {errors.title ? <div className='error'> Title is required * </div> : null}
              </div>

              <div className='col-lg-6 col-sm-12'>
                <div className='addCourse_detail d-flex'>
                  <div className='detail_icon'><FaCamera /></div>
                  <input {...register('pic', { required: true })} type="file" placeholder='Title *' />
                </div>
                {errors.pic ? <div className='error'> Picture is required * </div> : null}

              </div>


            </div>
            <div className='row'>
              <div className='col-lg-12 col-sm-12 mb-3'>
                <textarea {...register('description', { required: true })} className='textarea' placeholder='Description *'></textarea>
              </div>
              {errors.description ? <div className='error'>Description is required * </div> : null}
              <br />
            </div>
            <div className='row'>
              <div className='col-lg-12 col-sm-12'>
                <button className='course_btn'>Upload</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  </>
}
