import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Global from '../assets/image/global.png'

const View = () => {

  const [data, setData] = useState([])
  const mainRef = useRef()
  const location = useLocation()

  useEffect(() => {
    const viewData = location.state;
    setData(viewData)
  }, [location.state])

  console.log("View data: ", data);

  const { id, date, name, dob, gender, martial, email, phone, place, district, state, zip, } = data
  

  return (
    <>
      <section className="view w-full h-full flex flex-col items-center justify-center !mb-2">
        <main ref={mainRef} className="w-full lg:w-dvh h-fit !m-2 lg:!my-2" style={{
          backgroundColor: '#fff',
          color: '#000',
          fontFamily: 'Arial, sans-serif'
        }}>
          <header className='w-full flex items-center justify-center h-30 !py-2 ' style={{ backgroundColor: '#0D2C45' }}>
            <div className=" w-1/3 h-full">
              <img className="w-full h-full object-contain" src={Global} />
            </div>
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className="font-bold text-white">State Registration <span className="text-[#32C2AC]">Form</span> </h1>
              <a className='link link-info' href="https://www.linkedin.com/in/rickymoses08" target="_blank" rel="noopener noreferrer">LinkedIn Link</a>
            </div>
          </header>
          <section className="grid grid-cols-2 !p-2 text-black">
            <div className="">
              <table className='table  border-separate border-spacing-2 h-20'>
                <tbody className="">
                  <tr>
                    <th>ID No: </th>
                    <td>:</td>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <th>Date: </th>
                    <td>:</td>
                    <td>{date}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="">
              <h5 className="">Dear Sir/Madam,</h5>
              <p>Thank you for your attention. Please find the details attached.</p>
            </div>
          </section>
          <hr className='border-black' />
          <table className="table border-separate border-spacing-5 text-black">
            <tbody className="">
              <tr>
                <th>Name</th>
                <td>:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <th>DOB</th>
                <td>:</td>
                <td>{dob}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>:</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <th>Martial Status</th>
                <td>:</td>
                <td>{martial}</td>
              </tr>
              <tr>
                <th>Email Id</th>
                <td>:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <th>Phone No</th>
                <td>:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <th>Place of Birth</th>
                <td>:</td>
                <td>{place}</td>
              </tr>
              <tr>
                <th>District</th>
                <td>:</td>
                <td>{district}</td>
              </tr>
              <tr>
                <th>State</th>
                <td>:</td>
                <td>{state}</td>
              </tr>
              <tr>
                <th>Zip Code</th>
                <td>:</td>
                <td>{zip}</td>
              </tr>
            </tbody>
          </table>
          <div className=" text-black text-end !p-2">
            <h5 className='font-bold text-2xl'>Signature</h5>
            <p>{name}</p>
          </div>
        </main>
      </section>
    </>
  )
}

export default View