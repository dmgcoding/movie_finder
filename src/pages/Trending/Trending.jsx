import React,{useState,useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Trending.css'
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown'
import MovieCard from '../../components/MovieCard/MovieCard'
import axios from 'axios'

const items = [
    {
        value: 'movie',
        desc: 'Movie'
    },
    {
        value: 'tv_shows',
        desc: 'TV Shows'
    }
]

const Trending = () => {
    const api_key = process.env.REACT_APP_TMDB_APIKEY
    const [selectedItem, setSelectedItem] = useState(items[0])
    const [trendings, setTrendings] = useState([])
    // const [errors, setErrors] = useState('')

    useEffect(()=>{
        getTrending()
    },[selectedItem])

    function getTrending(){
        if(selectedItem.value === 'movie'){
            getTrendingMovies()
        }else{
            getTrendingTvShows()
        }
    }

    async function getTrendingMovies(){
        //https://api.themoviedb.org/3/trending/movie/day?api_key={{apikey}}
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + api_key
        try {
            const res = await axios.get(url)
            if(res.data.results === null || res.data.results === undefined){
                console.log('error in feching',res.data)
            }else{
                const trendingList = res.data.results
                setTrendings(trendingList)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function getTrendingTvShows(){
        //https://api.themoviedb.org/3/trending/tv/day?api_key={{apikey}}
        const url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=' + api_key
        try {
            const res = await axios.get(url)
            if(res.data.results === null || res.data.results === undefined){
                console.log('error in feching',res.data)
            }else{
                const trendingList = res.data.results
                setTrendings(trendingList)
            }
        } catch (error) {
            console.log(error)
        }
    }


    function renderMovieCards(){
        return (
            trendings.map(t=>(<MovieCard key={t.id} movie={t}/>))
        )
    }

  return (
    <div className='w-trending'>
        <div className="w-trending-pad100"></div>
        <Header />
        <div className="w-trending__body">
            <div className="w-trending__body-title">
                <div className="w-trending__body-title__container">
                    <h2>Trending</h2>
                    <div className="g-header__container-search__switcher"><CustomDropDown items={items} selectedItem={selectedItem} callback={(val)=>{setSelectedItem(val)}}/></div>
                </div>
            </div>
            <div className="w-trending__body-movies">
                {renderMovieCards()}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Trending