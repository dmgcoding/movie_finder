import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MovieDetailsBox from '../../components/MovieDetailsBox/MovieDetailsBox'
import './Home.css'

const Home = () => {
  return (
    <div className='w-home'>
        <div className="w-home-pad100"></div>
        <Header />
        <div className="w-home__body">
            <div className="w-home__body__moviedetailbox">
                <MovieDetailsBox movie={null}/>
            </div>
            <div className="w-home__body__moviereviewbox"></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home