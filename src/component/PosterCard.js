import React from 'react'

const PosterCard = ({movie}) => {
  return (
    <div className='mb-4'>
      <div>
      <img src={`${movie?.posterURLs?.original}`} alt="" className="rounded-lg" style={{height:"250px", width: "150px"}}/>
      <div className={`radial-progress w-10 h-10 border-4 border-slate-900 bg-slate-900 text-${movie.tmdbRating >= 70 ? "success": "warning"}`} style={{"--value":70, top:"-20px", left:"10px", "--size": "12rem", "--thickness": "2px" }}><span className='text-white'>{movie.tmdbRating}%</span></div>
      </div>
      <p className='font-bold' style={{width: "100px"}}>{movie.originalTitle}</p>
      <p>{movie.year}</p>
    </div>
  )
}

export default PosterCard
