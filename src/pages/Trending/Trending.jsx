import React,{useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Trending.css'
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown'
import MovieCard from '../../components/MovieCard/MovieCard'

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
    const [selectedItem, setSelectedItem] = useState(items[0])

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
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Trending