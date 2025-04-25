import React, { useRef } from 'react'

const IdInput = ({data, onChange}) => {

    const idRef = useRef([])
    const dateRef = useRef([])


    const handleArrayChanges = (type, i, val, refs) => {
        const newArray = [...data[type]];
        newArray[i] = val;
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
        <div className="id-input grid grid-cols-3">
            <div className=" col-span-2 grid gap-3 !p-2">
                <table className="table border-separate border-spacing-1">
                    <tbody className="collapse !p-1">
                        <tr className=''>
                            <th className='w-14 sm:w-20'>Id No: </th>
                            <td className='grid grid-cols-8'>
                                {data.id.map((item, i) => (
                                    <input
                                        key={i}
                                        ref={el => idRef.current[i] = el}
                                        type='text'
                                        maxLength={1}
                                        value={item}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            if (/^\d?$/.test(val)) {
                                                handleArrayChanges('id', i, val, idRef)
                                            }
                                        }}
                                        onKeyDown={(e) => handleKeyDown(e, i, idRef)}
                                        className="input input-neutral w-5/6 text-center bg-transparent " required/>
                                ))}
                            </td>
                        </tr>

                        <tr className=''>
                            <th className=''>Date: [dd/mm/yyyy] </th>
                            <td className='grid grid-cols-8'>
                                {data.date.map((item, i) => (
                                    <input
                                        key={i}
                                        ref={el => dateRef.current[i] = el}
                                        type='text'
                                        maxLength={1}
                                        value={item}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            if (/^\d?$/.test(val)) {
                                                handleArrayChanges('date', i, val, dateRef)
                                            }
                                        }}
                                        onKeyDown={(e) => handleKeyDown(e, i, dateRef)}
                                        className="input input-neutral w-5/6 text-center bg-transparent" required/>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className=" !p-1 h-42 flex items-center justify-center">
                <input type='file' className="border w-full h-full"/>
            </div>
        </div>
    )
}

export default IdInput