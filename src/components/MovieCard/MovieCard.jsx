import React from 'react'
import movie_poster from '../../assets/trending/medium-cover.jpg'

const MovieCard = ({movie}) => {

  function buildMoviePosterUrl(name){
    let baseUrl = 'http://image.tmdb.org/t/p/w500'
    return baseUrl+name
  }

  function getReleaseYear(date){
    let arr = date.split('-')
    return arr.length > 0 ? arr[0] : ''
  }

  return (
    <div className="w-trending__body-movies__moviecard">
        <img src={buildMoviePosterUrl(movie.poster_path)} alt="movie poster" />
        <p className='w-trending__body-movies__moviecard-title'>{movie.media_type === 'tv'? movie.name : movie.title}</p>
        <p className='w-trending__body-movies__moviecard-votes'>Avergage vote: {movie.vote_average}</p>
        {movie.media_type === 'tv' ? (<></>) : (<p className='w-trending__body-movies__moviecard-year'>{getReleaseYear(movie.release_date)}</p>)}
    </div>
  )
}

export default MovieCard