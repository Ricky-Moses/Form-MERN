import React, { useRef } from 'react'

const Dob = ({data, onChange}) => {

    const dobRef = useRef([])

    const handleChange = (type, i, val, refs) => {
        const newArray = [...data[type]]
        newArray[i] = val
        onChange(type, newArray)

        if(val && i < refs.current.length - 1){
            refs.current[i + 1].focus()
        }
    }

    const handleKeyDown = (e, i, refs) =>{
        if(e.key === "Backspace" && !e.target.value & i > 0){
            refs.current[i - 1].focus()
        }
    }

    return (
        <tr className=''>
            <th className=''>DOB[dd/mm/yyyy]</th>
            <td className='text-2xl '>:</td>
            <td className='grid grid-cols-8 sm:w-5/6 '>
                {data.dob.map((item, i) => (
                    <input
                        key={i}
                        ref={el => dobRef.current[i] = el}
                        type='tel'
                        value={item}
                        maxLength={1}
                        onChange={(e) => {
                            const val = e.target.value
                            if (/^\d?$/.test(val)) {
                                handleChange('dob', i, val, dobRef)
                            }
                        }}
                        onKeyDown={(e) => handleKeyDown(e, i, dobRef)}
                        className="input input-neutral w-5 xs:w-7 sm:w-1/2 text-center bg-transparent border-black" required/>
                ))}
            </td>
        </tr>
    )
}

export default Dob