import React from 'react'

const Gender = ({data, setData}) => {
    const handleChange = (e) => {
        setData(prev => ({...prev, gender: e.target.value}))
    }
    return (
        <tr className=''>
            <th className=''>Gender</th>
            <td className='text-2xl'>:</td>
            <td>
                <input
                    type='radio'
                    name='radio-12'
                    value="Male"
                    checked={data.gender === "Male"}
                    onChange={handleChange}
                    id='Male'
                    className="radio radio-sm bg-white checked:bg-white checked:text-black checked:border !me-2" required/>
                <label htmlFor="Male" className='font-bold'>Male</label>
                <input
                    type='radio'
                    name='radio-12'
                    value="Female"
                    id='Female'
                    checked={data.gender === "Female"}
                    onChange={handleChange}
                    className="radio radio-sm bg-white checked:bg-white checked:text-black checked:border !mx-2" required/>
                <label htmlFor="Female" className='font-bold'>Female</label>
            </td>
        </tr>
    )
}

export default Gender