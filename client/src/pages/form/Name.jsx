import React from 'react'

const Name = ({data, setData}) => {

    const handleChanges = (e) =>{
        setData(prev => ({...prev, name: e.target.value}))
    }

    return (
        <tr className=''>
            <th className=''>Name</th>
            <td className='text-2xl'>:</td>
            <td>
                <input
                    value={data.name}
                    onChange={handleChanges}
                    className="input input-neutral w-full bg-transparent border-black !ps-2" required/>
            </td>
        </tr>
    )
}

export default Name