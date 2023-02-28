import React from 'react'
import movie_poster from '../../assets/trending/medium-cover.jpg'

const MovieCard = () => {
  return (
    <div className="w-trending__body-movies__moviecard">
        <img src={movie_poster} alt="movie poster" />
        <p className='w-trending__body-movies__moviecard-title'>Lord of the rings</p>
        <p className='w-trending__body-movies__moviecard-votes'>Avergage vote: 6.573</p>
        <p className='w-trending__body-movies__moviecard-year'>2023</p>
    </div>
  )
}

export default MovieCard