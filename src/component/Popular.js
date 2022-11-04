import { list } from 'postcss'
import React from 'react'

const Popular = () => {
  return (
    <div className='flex m-4'>
      <div>
      <h1 className='font-bold text-2xl'>What's Popular</h1>
      </div>
      <div className='border-black border-2 rounded-full mx-3 items-center'>
        <ul className=' hidden md:flex list-none flex-row justify-between items-center flex-initia'>
        {["Streeming", "On TV", "For Rent", "In Theaters"].map((item)=>(
            <li key={item} className="mx-2 font-bold">{item}</li>
            ))}
        </ul>
      </div>

    </div>
  )
}

export default Popular
