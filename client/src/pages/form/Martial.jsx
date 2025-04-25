import React from 'react'

const Martial = ({data, setData}) => {

    const handleChange = (e) => {
        setData(prev => ({...prev, martial: e.target.value}))
    }

    return (
        <tr className=''>
            <th className=''>Martial Status</th>
            <td className='text-2xl'>:</td>
            <td>
                <input
                    type='radio'
                    name='martial'
                    value="Married"
                    checked={data.martial === "Married"}
                    onChange={handleChange}
                    id='Married'
                    className="radio radio-sm bg-white checked:bg-white checked:text-black checked:border !me-2" />
                <label htmlFor="Married" className='font-bold'>Married</label>
                <input
                    type='radio'
                    name='martial'
                    value="Unmarried"
                    checked={data.martial === "Unmarried"}
                    onChange={handleChange}
                    id='Unmarried'
                    className="radio radio-sm bg-white checked:bg-white checked:text-black checked:border !mx-2" />
                <label htmlFor="Unmarried" className='font-bold'>Unmarried</label>
            </td>
        </tr>
    )
}

export default Martial