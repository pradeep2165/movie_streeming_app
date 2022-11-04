import { list } from 'postcss'
import React, { useState } from 'react'

const Popular = () => {
    const [streemingActive, setStreemingActive] = useState("Streeming");

  return (
    <div className='flex m-4'>
      <div>
      <h1 className='font-bold text-2xl'>What's Popular</h1>
      </div>
      <div className='border-black border-2 rounded-full mx-3 items-center'>
        <ul className=' hidden md:flex list-none flex-row justify-center items-center flex-initia gap-2'>
        {["Streeming", "On TV", "For Rent", "In Theaters"].map((item)=>(
            <li key={item} className={`font-bold p-1 ${item === streemingActive ? ("bg-slate-900 rounded-full text-green-500 px-6"):"px-6"} `} onClick={()=>setStreemingActive(item)}>{item}</li>
            ))}
        </ul>
      </div>

    </div>
  )
}

export default Popular
