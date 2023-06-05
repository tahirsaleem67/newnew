import React, { useEffect, useState } from 'react';
import './users.css';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import axios from 'axios';

export const GalleryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;

  let [gallery, setGallery] = useState([])
  useEffect(() => {
    axios.get("/gallery").then((res) => {
      setGallery(res.data)
    })
  }, [])

  // Calculate pagination indexes
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = gallery.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return <>
    <div className='container-fluid table_container'>
      <div className='row my-4'>
        <div className='col-lg-12 col-sm-12'>
          <h1 className='users_head'>Gallery Images List</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'>
          <table>
            <thead>
              <tr>
                <th>Sr#</th>
                <th>Picture</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td><img src={data.pic} style={{ width: "100px" }} alt="" /></td>
                  <td>{data.title}</td>
                  <td>  <button onClick={() => {
                    axios.delete('/deleteGallery?id=' + data._id).then(() => {
                      setGallery(gallery.filter(use => data._id != use._id))
                    });
                  }}><AiFillDelete /></button></td>
                  <td><AiFillEdit /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'>
          <div className='pagination'>
            {Array.from({ length: Math.ceil(gallery.length / recordsPerPage) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`paginationButton ${currentPage === index + 1 ? 'active' : ''}`}
                  style={{ backgroundColor: currentPage === index + 1 ? '#2b2c6c' : '', color: currentPage === index + 1 ? 'white' : '' }}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </>
}
