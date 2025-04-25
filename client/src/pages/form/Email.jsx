import React from 'react'

const Email = ({data, setData}) => {

    const handleChange = (e) => {
        setData(prev => ({...prev, email: e.target.value}))
    }

    return (
        <tr className=''>
            <th className=''>Email</th>
            <td className='text-2xl'>:</td>
            <td className="">
                <input
                    type='email'
                    value={data.email}
                    onChange={handleChange}
                    className="input input-neutral w-full bg-transparent border-black !ps-2" required/>
            </td>
        </tr>
    )
}

export default Email