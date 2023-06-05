import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const MessageList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 15;
    let [message, setMessage] = useState([])
    useEffect(() => {
        axios.get("/contact").then((resp) => {
            setMessage(resp.data)
        })
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = message.slice(indexOfFirstRecord, indexOfLastRecord);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return <>
        <div className='container-fluid table_container'>
            <div className='row my-4'>
                <div className='col-lg-12 col-sm-12'>
                    <h1 className='users_head'>Messages</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-sm-12'>
                    <table>
                        <thead>
                            <tr>
                                <th>Sr#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRecords.map((data, index) => (
                                <tr key={data.id}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.number}</td>
                                    <td>{data.message}</td>
                               
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-sm-12'>
                    <div className='pagination'>
                        {Array.from({ length: Math.ceil(message.length / recordsPerPage) }).map(
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
