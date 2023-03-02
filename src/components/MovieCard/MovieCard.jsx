import React from 'react'
// import movie_poster from '../../assets/trending/medium-cover.jpg'
import { useDispatch } from 'react-redux'
import { setSelectedMovie } from '../../features/movies/movieSlicer'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let mediatype = movie.media_type

  function buildMoviePosterUrl(name){
    let baseUrl = 'http://image.tmdb.org/t/p/w500'
    return baseUrl+name
  }

  function getReleaseYear(date){
    let arr = date.split('-')
    return arr.length > 0 ? arr[0] : ''
  }

  function selectMovie(){
    //set selectedMovieId
    dispatch(setSelectedMovie({id: movie.id,type: mediatype}))
    //route to home
    navigate('/')
  }

  return (
      <div className="w-trending__body-movies__moviecard" onClick={selectMovie}>
        <img src={buildMoviePosterUrl(movie.poster_path)} alt="movie poster" />
        <p className='w-trending__body-movies__moviecard-title'>{movie.media_type === 'tv'? movie.name : movie.title}</p>
        <p className='w-trending__body-movies__moviecard-votes'>Avergage vote: {movie.vote_average}</p>
        {movie.media_type === 'tv' ? (<></>) : (<p className='w-trending__body-movies__moviecard-year'>{getReleaseYear(movie.release_date)}</p>)}
    </div>
  )
}

export default MovieCard