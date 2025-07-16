import React from 'react'

const Tabs = ({filterbyCategory}) => {
  return (
    <div className='p-5 flex gap-6 justify-center flex-wrap'>
        <button className='hover:scale-105 duration-500 transition ease hover:shadow-md shadow-cyan-400 border border-cyan-400 px-5 py-2 rounded-md text-cyan-400' onClick={()=>filterbyCategory('All')}>All</button>
        <button className='hover:scale-105 duration-500 transition ease hover:shadow-md shadow-cyan-700 border border-blue-700 px-5 py-2 rounded-md text-blue-700' onClick={()=>filterbyCategory('Action')}>Actions</button>
        <button className='hover:scale-105 duration-500 transition ease hover:shadow-md shadow-gray-400 border border-gray-400 px-5 py-2 rounded-md text-gray-400' onClick={()=>filterbyCategory('Thriller')}>Thrillers</button>
        <button className='hover:scale-105 duration-500 transition ease hover:shadow-md shadow-cyan-400 border border-cyan-400 px-5 py-2 rounded-md text-cyan-400' onClick={()=>filterbyCategory('Animation')}>Animation</button>
        <button className='hover:scale-105 duration-500 transition ease hover:shadow-md shadow-green-500 border border-green-500 px-5 py-2 rounded-md text-green-500' onClick={()=>filterbyCategory('Horror')}>Horror</button>
        <button className='hover:scale-105 duration-500 transition ease hover:shadow-md shadow-orange-400 border border-orange-400 px-5 py-2 rounded-md text-orange-400' onClick={()=>filterbyCategory('Drama')}>Drama</button>
        <button className='hover:scale-105 duration-500 transition ease hover:shadow-md shadow-cyan-400 border border-cyan-400 px-5 py-2 rounded-md text-cyan-400' onClick={()=>filterbyCategory('Sci-Fi')}>Sci-Fi</button>
    </div>
  )
}

export default Tabs