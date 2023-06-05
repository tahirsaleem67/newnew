import React, { useEffect, useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import "./gallery.css"
import axios from 'axios';


export const Gallery = () => {
  let [img, setImg] = useState([])

  useEffect(() => {

    axios.get("/gallery").then((res) => {
      setImg(res.data)
    })
  }, [])


  return <>

    <div className='container-fluid mt-2 mb-5'>

    <div className="row">
        <div className='col-lg-12 '>
          <h1 className='about-heading'>Galle<span>ry</span> </h1>
        </div>
      </div>

      <div className='row'>
        {img.reverse().map((data) => {
          return <>
            <div className='col-lg-3 col-md-4 col-sm-12 img_bor'>
              <div className='gallery_img'>
                <img src={data.pic} alt="" />
                <div className='img_below'>
                  <p>{data.title}</p>
                  <FaRegEye />
                </div>
              </div>
            </div>
          </>
        })

        }

      </div>
    </div>
  </>
}
