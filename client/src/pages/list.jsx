import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL
const List = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const dataList = async () => {

      try {
        const response = await axios.get(API)
        setData(response.data)
        console.log(response.data);
      }
      catch (err) {
        console.log('Error receiving', err.message);
      }
    }
    dataList()

  }, [])

  const handleEdit = (id) => {
    const findData = data.find(data => data.id === id)
    console.log(findData);
    navigate('/', { state: findData })
  }

  const handleDelete = async (_id, id) => {
    if (window.confirm(`Are you sure want to delete this list ? ${id}`)) {
      await axios.delete(`${API}/list/${_id}`)
      let deleteData = data.filter(data => data._id !== _id)
      setData(deleteData)
      console.log('Remaining Data: ', deleteData);
    }
  }

  const handleView = async (id) => {
    const viewData = data.find(data => data._id === id)
    console.log('List View: ', viewData);
    navigate('/view', { state: viewData })
  }

  return (
    <>
      <section className="!p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map(({ _id, name, id, dob, phone }) => (
          <div key={id} className="card h-fit xs:h-60 border border-black overflow-hidden">
            <main className="col-span-2 text-black">
              <h1 className="text-center text-2xl text-white font-bold bg-[#0D2C45]">SRF Identity Card</h1>
              <table className="table border-separate border-spacing-3">
                <tbody className="">
                  <tr>
                    <th>Name</th>
                    <td>:</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>Id</th>
                    <td>:</td>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <th>DOB</th>
                    <td>:</td>
                    <td>{dob}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>:</td>
                    <td>{phone}</td>
                  </tr>
                </tbody>
              </table>
              <div className="grid grid-cols-3 gap-2 !px-4 !py-1">
                <button type='button' className="btn btn-outline btn-success" onClick={() => handleEdit(id)}>Edit</button>
                <button type='button' className="btn btn-outline btn-primary" onClick={() => handleView(_id)}>View</button>
                <button type='button' className="btn btn-outline btn-error" onClick={() => handleDelete(_id, id)}>Delete</button>
              </div>
            </main>
          </div>
        ))}
      </section>
    </>
  )
}

export default List