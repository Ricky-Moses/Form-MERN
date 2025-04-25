import React from 'react'

const State = ({data, setData}) => {
    const handleChange = (e) =>{
        setData(prev => ({...prev, state: e.target.value}))
    }
    return (
        <tr className=''>
            <th className=''>State</th>
            <td className='text-2xl'>:</td>
            <td>
                <select
                    value={data.state}
                    onChange={handleChange}
                    className="select bg-transparent !ps-2" required>

                    <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
            </td>
        </tr>
    )
}

export default State