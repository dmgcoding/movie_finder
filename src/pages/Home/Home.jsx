import React,{useEffect,useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MovieDetailsBox from '../../components/MovieDetailsBox/MovieDetailsBox'
import MovieReviewBox from '../../components/MovieReviewBox/MovieReviewBox'
import './Home.css'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Home = () => {
  const [movieDetails, setMovieDetails] = useState(null)
  const [reviews, setReviews] = useState(null)

  let selectedMovieId = useSelector(state=>state.movieSlice.selected_movie_id)
  // let media_type = useSelector(state=>state.movieSlice.media_type)
  let selected_movie_type = useSelector(state=>state.movieSlice.selected_movie_type)

  //pull movie details on selectedMovieId change
  useEffect(()=>{
    pullMovieDetails()
    pullReviews()
  },[selectedMovieId])

  //fetch and set selected movie details
  async function pullMovieDetails(){
    const api_key = process.env.REACT_APP_TMDB_APIKEY
      let url = 'https://api.themoviedb.org/3/movie/'+selectedMovieId+'?api_key='+api_key+'&language=en-US'
      if(selected_movie_type === 'tv'){
          url = 'https://api.themoviedb.org/3/tv/'+selectedMovieId+'?api_key='+api_key+'&language=en-US'
      }

      try {
          const res = await axios.get(url)
          setMovieDetails(res.data)
      } catch (error) {
          console.log(error.message)
      }
  }

  //fetch and set reviews
  async function pullReviews(){
    const api_key = process.env.REACT_APP_TMDB_APIKEY
      let url = 'https://api.themoviedb.org/3/movie/'+selectedMovieId+'/reviews?api_key='+api_key+'&language=en-US'
      if(selected_movie_type === 'tv'){
          url = 'https://api.themoviedb.org/3/tv/'+selectedMovieId+'/reviews?api_key='+api_key+'&language=en-US'
      }

      try {
          const res = await axios.get(url)
          if(res.data.results !== undefined || res.data.results !== null){
            setReviews(res.data)
          }
      } catch (error) {
          console.log(error.message)
      }
  }

  //api gives only name part of the poster. builder the url with that
  function buildBgImgUrl(movie){
    if(movieDetails !== null){
      return 'https://image.tmdb.org/t/p/original'+movie.backdrop_path
    }else{
      return null
    }
  }


  return (
    <div className='w-home' style={{backgroundImage: `linear-gradient(0deg, rgba(3, 0, 28,0.5), rgba(3, 0, 28,0.5)), url(${buildBgImgUrl(movieDetails)})`}}>
        <div className="w-home-pad100"></div>
        <Header />
        <div className="w-home__body">
            <div className="w-home__body__moviedetailbox">
              <MovieDetailsBox m={movieDetails}/>
            </div>
            <div className="w-home__body__moviereviewbox">
                {reviews === null ? <></> : reviews.results.length > 0 ? <MovieReviewBox key={reviews.id} reviews={reviews}/> : <></>}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home