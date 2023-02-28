
import React,{useState} from 'react'
import './Header.css'
import CustomDropDown from '../CustomDropDown/CustomDropDown'
import { Link } from 'react-router-dom'

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


const Header = () => {

    const [selectedItem, setSelectedItem] = useState(items[0])
    
  return (
    <div className='g-header'>
        <div className="g-header__container">
            <div className="g-header__container-search">
                <div className="g-header__container-search__searchbarcontainer">
                    <div className="g-header__container-search__searchbarcontainer-searchbar">
                        <input type='text' id='movie_search_query' placeholder='Search...'/>
                    </div>
                    <div className="g-header__container-search__searchbarcontainer-resultscontainer" style={{display: 'none'}}>
                        <div className="g-header__container-search__searchbarcontainer-resultscontainer-result">
                            Avengers: Endgame
                        </div>
                        <div className="g-header__container-search__searchbarcontainer-resultscontainer-result">
                        Avengers: Endgame
                        </div>
                        <div className="g-header__container-search__searchbarcontainer-resultscontainer-result">
                        Avengers: Endgame
                        </div>
                    </div>
                </div>
                <div className="g-header__container-search__switcher">
                    <CustomDropDown items={items} selectedItem={selectedItem} callback={(val)=>{setSelectedItem(val)}}/>
                </div>
            </div>
            <div className="g-header__container-menuitem"><Link to='/'>Home</Link></div>
            <div className="g-header__container-menuitem"><Link to='trending'>Trending</Link></div>
        </div>
    </div>
  )
}

export default Header