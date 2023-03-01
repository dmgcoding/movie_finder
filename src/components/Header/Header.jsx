
import React,{useEffect, useState} from 'react'
import './Header.css'
import CustomDropDown from '../CustomDropDown/CustomDropDown'
import { Link } from 'react-router-dom'
import { fetchMovies, setSelectedMovie, setMediaType, setQuery } from '../../features/movies/movieSlicer'
import { useDispatch,useSelector } from 'react-redux'

const items = [
    {
        value: 'movie',
        desc: 'Movie'
    },
    {
        value: 'tv',
        desc: 'TV Shows'
    }
]


const Header = () => {
    const dispatch = useDispatch()
    let query = useSelector(state=>state.movieSlice.query)
    let status = useSelector(state=>state.movieSlice.status)
    let movies = useSelector(state=>state.movieSlice.movie_results)
    let media_type = useSelector(state=>state.movieSlice.media_type)

    const [selectedMediaType, setSelectedMediaType] = useState(items[0])

    //pull movies on query and mediatype change
    useEffect(()=>{
        if(status === 'idle' || status === 'success'){
            pullMovies()
        }
    },[query,media_type])
  
    function pullMovies(){
      if(query !== '')dispatch(fetchMovies({media_type: media_type,query: query}))
    }

    function onMovieItemClicked(id){
        dispatch(setSelectedMovie(id))
    }

    function renderResults(){
        if(movies.length > 0){
            return (
                <div className="g-header__container-search__searchbarcontainer-resultscontainer">
                    {movies.map(m=>(
                        <div id={m.id} className="g-header__container-search__searchbarcontainer-resultscontainer-result" onClick={()=>{onMovieItemClicked(m.id)}}>
                        {media_type === 'movie' ? m.original_title : m.original_name}
                    </div>
                    ))}
                </div>
            )
        }
    }

    function toggleSelectedMediaType(val){
        if(selectedMediaType.value !== val.value){//don't change if media type is same
            setSelectedMediaType(val)
            dispatch(setMediaType(val))
        }
    }
    
  return (
    <div className='g-header'>
        <div className="g-header__container">
            <div className="g-header__container-search">
                <div className="g-header__container-search__searchbarcontainer">
                    <div className="g-header__container-search__searchbarcontainer-searchbar">
                        <input type='text' id='movie_search_query' placeholder='Search...' onChange={(e)=>{
                            dispatch(setQuery(e.target.value))
                        }}/>
                    </div>
                    {renderResults()}
                </div>
                <div className="g-header__container-search__switcher">
                    <CustomDropDown items={items} selectedItem={selectedMediaType} callback={(val)=>{toggleSelectedMediaType(val)}}/>
                </div>
            </div>
            <div className="g-header__container-menuitem"><Link to='/'>Home</Link></div>
            <div className="g-header__container-menuitem"><Link to='/trending'>Trending</Link></div>
        </div>
    </div>
  )
}

export default Header