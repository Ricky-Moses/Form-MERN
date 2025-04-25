import React, { useRef } from 'react'

const Zip = ({data, onChange}) => {

    const zipRef = useRef([])

    const handleChanges = (type, i, val, refs) =>{
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
            <th className=''>Zip-Code</th>
            <td className='text-2xl'>:</td>
            <td className='grid grid-cols-8'>
                {data.zip.map((item, i) => (
                    <input
                        key={i}
                        ref={(el) => zipRef.current[i] = el}
                        type='text'
                        value={item}
                        maxLength={1}
                        onChange={(e) => {
                            const val = e.target.value
                            if (/^\d?$/.test(val)) {
                                handleChanges('zip', i, val, zipRef)
                            }
                        }}
                        onKeyDown={(e) => handleKeyDown(e, i, zipRef)}
                        className="input input-neutral w-5 xs:w-7 sm:w-1/2 text-center bg-transparent" required/>
                ))}
            </td>
        </tr>
    )
}

export default Zip