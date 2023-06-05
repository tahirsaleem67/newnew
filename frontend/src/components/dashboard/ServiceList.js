import React, { useEffect, useState } from 'react';
import './users.css';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from 'axios';

export const ServiceList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;

  let [services, setServices] = useState([])
  useEffect(() => {
    axios.get("/services").then((res) => {
      setServices(res.data)
    })
  }, [])

  // Calculate pagination indexes
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = services.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container-fluid table_container'>
      <div className='row my-4'>
        <div className='col-lg-12 col-sm-12'>
          <h1 className='users_head'>Services</h1>
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
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td><img src={data.pic} style={{ width: "70px" }} alt="" /></td>
                  <td>{data.title}</td>
                  <td>{data.description.slice(0, 80)}...</td>
                  <td>  <button onClick={() => {
                    axios.delete('/deleteService?id=' + data._id).then(() => {
                      setServices(services.filter(use => data._id != use._id))
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
            {Array.from({ length: Math.ceil(services.length / recordsPerPage) }).map(
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
  );
};

