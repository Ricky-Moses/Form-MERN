import React from 'react'
// Image
import Global from '../../assets/image/global.png'

const Header = () => {
  return (
    <header className='flex items-center justify-center h-30 !py-2'>
      <div className=" w-1/3 h-full">
        <img className="w-full h-full object-contain" src={Global} />
      </div>
      `<div className="w-full h-full flex flex-col justify-center">
        <h1 className="font-bold text-white">State Registration <span className="text-[#32C2AC]">Form</span> </h1>
        <a className='link link-info' href="https://www.linkedin.com/in/rickymoses08" target="_blank" rel="noopener noreferrer">LinkedIn Link</a>
      </div>`
    </header>
  )
}

export default Header