import React from 'react'

const City = ({ data, setData }) => {

    const handleChange = (e) => {
        setData(prev => ({ ...prev, district: e.target.value }))
    }

    return (
        <tr className=''>
            <th className=''>City</th>
            <td className='text-2xl'>:</td>
            <td>
                <select
                    value={data.district}
                    name='district'
                    onChange={handleChange}
                    className="select bg-transparent !ps-2" required>
                    <option>--Select--</option>
                    <option value="Dindigul">Dindigul</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Chennai">Chennai</option>
                </select>
            </td>
        </tr>
    )
}

export default City