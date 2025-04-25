import React from 'react'

const Address = ({data, setData}) => {

    const handleChange = (e) => {
        setData(prev => ({...prev, address: e.target.value}))
    }

    return (
        <tr className=''>
            <th className=''>Address</th>
            <td className='text-2xl'>:</td>
            <td>
                <textarea
                    value={data.address}
                    onChange={handleChange}
                    className="w-full min-h-20 max-h-20 rounded border !p-2" required></textarea>
            </td>
        </tr>
    )
}

export default Address