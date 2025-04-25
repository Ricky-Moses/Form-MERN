import React, { useState } from 'react'
// Axios
import axios from 'axios'
// Router DOM
import { useNavigate } from 'react-router-dom'

// Components
import Header from './form/Header'
import IdInput from './form/IdInput'
import Name from './form/Name'
import Dob from './form/Dob'
import Place from './form/Place'
import Gender from './form/Gender'
import Martial from './form/Martial'
import Address from './form/Address'
import State from './form/State'
import City from './form/City'
import Zip from './form/Zip'
import Email from './form/Email'
import Phone from './form/Phone'

// API
const API = import.meta.env.VITE_API_URL

const Form = () => {

    const [formData, setFormData] = useState({
        id: Array(8).fill(''),
        date: Array(8).fill(''),
        name: '',
        dob: Array(8).fill(''),
        place: '',
        gender: '',
        martial: '',
        address: '',
        state: 'Tamil Nadu',
        district: '',
        zip: Array(6).fill(''),
        email: '',
        phone: Array(10).fill('')
    });

    const navigate = useNavigate()

    const handleChanges = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formatDate = `${formData.date.slice(0, 2).join('').padStart(2, '0')}-${formData.date.slice(2, 4).join('').padStart(2, '0')}-${formData.date.slice(4).join('').padStart(4, '0')}`
        const formatDob = `${formData.dob.slice(0, 2).join('').padStart(2, '0')}-${formData.dob.slice(2, 4).join('').padStart(2, '0')}-${formData.dob.slice(4).join('').padStart(4, '0')}`
        const formatPhone = `${formData.phone.slice(0, 3).join('').padStart(3, '0')}-${formData.phone.slice(3, 6).join('').padStart(3, '0')}-${formData.phone.slice(6).join('').padStart(4, '0')}`

        const processData = {
            ...formData,
            id: formData.id.join(''),
            date: formatDate,
            dob: formatDob,
            zip: formData.zip.join(''),
            phone: formatPhone,
        }

        try{
            const response = await axios.post(API, processData)
            console.log('Submitted', response.user);

            setFormData({
                id: Array(8).fill(''),
                date: Array(8).fill(''),
                name: '',
                dob: Array(8).fill(''),
                place: '',
                gender: '',
                martial: '',
                address: '',
                state: 'Tamil Nadu',
                district: '',
                zip: Array(6).fill(''),
                email: '',
                phone: Array(10).fill('')
            })
        }
        catch(err){
            console.log('Error occur', err);
        }
    }

    return (
        <>
            <section className="form flex items-center justify-center text-black !py-2">
                <form onSubmit={handleSubmit} className="w-dvh h-fit shadow-2xl overflow-hidden">
                    {/* Header */}
                    <Header />
                    {/* Header */}
                    {/* Form */}
                    <main className="">
                        {/* Id, Date & Img */}
                        <IdInput data={formData} onChange={handleChanges} />
                        {/* Id, Date & Img */}
                        <hr />
                        <table className='table border-separate border-spacing-2 w-full !mt-2'>
                            <tbody className="">
                                {/* Name */}
                                <Name data={formData} setData={setFormData} />
                                {/* Name */}
                                {/* DOB */}
                                <Dob data={formData} onChange={handleChanges} />
                                {/* DOB */}
                                {/* Place of birth */}
                                <Place data={formData} setData={setFormData} />
                                {/* Place of birth */}
                                {/* Gender */}
                                <Gender data={formData} setData={setFormData} />
                                {/* Gender */}
                                {/* Martial Status */}
                                <Martial data={formData} setData={setFormData} />
                                {/* Martial Status */}
                                {/* Address */}
                                <Address data={formData} setData={setFormData} />
                                {/* Address */}
                                {/* State */}
                                <State data={formData} setData={setFormData} />
                                {/* State */}
                                {/* City */}
                                <City data={formData} setData={setFormData} />
                                {/* City */}
                                {/* Zip-Code */}
                                <Zip data={formData} onChange={handleChanges} />
                                {/* Zip-Code */}
                                {/* Email */}
                                <Email data={formData} setData={setFormData} />
                                {/* Email */}
                                {/* Phone */}
                                <Phone data={formData} onChange={handleChanges} />
                                {/* Phone */}
                                {/* Submit */}
                                <tr className=''>
                                    <td className="flex items-center gap-3">
                                        <input type='submit' className="btn btn-soft btn-primary !px-3" />
                                        <button
                                            onClick={() => navigate('/list')}
                                            className='btn btn-soft btn-primary !px-3'>List</button>
                                    </td>
                                </tr>
                                {/* Submit */}
                            </tbody>
                        </table>
                    </main>
                    {/* Form */}
                </form>
            </section>
        </>
    )
}

export default Form