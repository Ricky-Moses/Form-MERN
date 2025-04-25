import React from 'react'

const Place = ({ data, setData }) => {
    const handleChange = (e) =>{
        setData(prev => ({...prev, place: e.target.value}))
    }
    return (
        <tr className=''>
            <th className=''>Place Of Birth</th>
            <td className='text-2xl'>:</td>
            <td>
                <input
                    type='text'
                    value={data.place}
                    onChange={handleChange}
                    className="input input-neutral w-full bg-transparent border-black !ps-2" required/>
            </td>
        </tr>
    )
}

export default Place