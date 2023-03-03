
import React,{useEffect, useState} from 'react'
import './Header.css'
import CustomDropDown from '../CustomDropDown/CustomDropDown'
import { Link } from 'react-router-dom'
import { fetchMovies, setSelectedMovie, setMediaType, setQuery } from '../../features/movies/movieSlicer'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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

    const navigate = useNavigate()

    const [selectedMediaType, setSelectedMediaType] = useState(items[0])

    //pull movies on query and mediatype change
    useEffect(()=>{
        if(media_type === 'tv'){//set media type according to state
            setSelectedMediaType(items[1])
        }
        if(status === 'idle' || status === 'success'){
            pullMovies()
        }
    },[query,media_type])
  
    //when qeury is changing fetch movies with that query and set the results in redux state
    function pullMovies(){
      if(query !== '')dispatch(fetchMovies({media_type: media_type,query: query}))
    }

    function onMovieItemClicked(id){
        //set selectedMovieId
        dispatch(setSelectedMovie({id: id, type: selectedMediaType.value}))
        //route to home
        navigate('/')
    }

    //show results when movies list is not empty
    function renderResults(){
        if(movies.length > 0){
            return (
                <div id='results' className="g-header__container-search__searchbarcontainer-resultscontainer">
                    {movies.map((m,index)=>(
                        <div key={index} className="g-header__container-search__searchbarcontainer-resultscontainer-result" onClick={()=>{onMovieItemClicked(m.id)}}>
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
                    <CustomDropDown id='search_switcher' items={items} selectedItem={selectedMediaType} callback={(val)=>{toggleSelectedMediaType(val)}}/>
                </div>
            </div>
            <div className="g-header__container-menuitem"><Link to='/'>Home</Link></div>
            <div className="g-header__container-menuitem"><Link to='/trending'>Trending</Link></div>
        </div>
    </div>
  )
}

export default Header