import React, { useRef } from 'react'

const Phone = ({ data, onChange }) => {

    const phoneRef = useRef([])

    const handleChange = (type, i, val, refs) => {
        const newArray = [...data[type]]
        newArray[i] = val
        onChange(type, newArray)

        if(val && i < refs.current.length - 1){
            refs.current[i + 1].focus()
        }
    }

    const handleKeyDown = (e, i, refs) => {
        if(e.key === "Backspace" && !e.target.value && i > 0){
            refs.current[i - 1].focus()
        }
    }

    return (
        <tr className=''>
            <th className=''>Phone</th>
            <td className='text-2xl'>:</td>
            <td className="grid grid-cols-10">
                {data.phone.map((item, i) => (
                    <input
                        key={i}
                        ref={el => phoneRef.current[i] = el}
                        type='tel'
                        maxLength={1}
                        value={item}
                        onChange={(e) => {
                            const val = e.target.value
                            if (/^\d?$/.test(val)) {
                                handleChange('phone', i, val, phoneRef)
                            }
                        }}
                        onKeyDown={(e) => handleKeyDown(e, i, phoneRef)}
                        className="input input-neutral w-5 xs:w-6 sm:w-2/3 bg-transparent text-center border-black" required/>
                ))}
            </td>
        </tr>
    )
}

export default Phone