import React from 'react'

const MovieCard = ({data}) => {
  return (
    <div className="w-3xl sm:w-52 overflow-hidden p-2 flex flex-col items-center" >
        <div className="w-full h-auto bg-gray-800 object-cover mb-4 hover:scale-105 transition duration-500 ">
            <img className='w-full h-full object-cover rounded-md' src={data.poster_path} alt="" />
        </div>
        <div className="text-center">
            <h2 className='font-bold tracking-wider text-xl'>{data.title}</h2>
            <p className='text-gray-400'>{data.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard