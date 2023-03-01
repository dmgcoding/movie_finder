import React from 'react'
// import movie_poster from '../../assets/movie_poster.jpg'
import './MovieDetailsBox.css'
import {MOVIES} from '../../data/movies'


const MovieDetailsBox = ({mediatype,m}) => {
    if(m === null || m === undefined)m = MOVIES.default_movie

    function getGenres(){
        let list = []
        for (let i = 0; i < m.genres.length; i++) {
            const g = m.genres[i];
            list.push(g.name)
        }
        return list.join(', ')
    }

    function getStudios(){
        let list = []
        for (let i = 0; i < m.production_companies.length; i++) {
            const g = m.production_companies[i];
            list.push(g.name)
        }
        return list.join(', ')
    }
    
    function getRevenue(){
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
          });
          
          return formatter.format(m.revenue)
    }

    function buildPosterPath(){
        return 'http://image.tmdb.org/t/p/w500'+m.poster_path
    }

    // return (<div></div>)

  return (
    <div className='g-moviedetailbox'>
        <div className='g-moviedetailbox-img'>
            <img src={buildPosterPath()} alt='movie poster'/>
        </div>
        <div className='g-moviedetailbox-details'>
            <h1>{m.original_title}</h1>
            <h2>{m.tagline}</h2>
            <p>{m.overview}</p>
            <div className="g-moviedetailbox-details__studio">
                <div className="g-moviedetailbox-details__studio-genre">
                {getGenres()}
                </div>
                <div className="g-moviedetailbox-details__studio-studio">
                {getStudios()}
                </div>
            </div>
            <div className="g-moviedetailbox-details__statboxes">
                <div className="g-moviedetailbox-details__statboxes-box">
                    <div className="g-moviedetailbox-details__statboxes-box-title">Release Date</div>
                    <div className="g-moviedetailbox-details__statboxes-box-stat">{m.release_date}</div>
                </div>
                <div className="g-moviedetailbox-details__statboxes-box">
                    <div className="g-moviedetailbox-details__statboxes-box-title">Running Time:</div>
                    <div className="g-moviedetailbox-details__statboxes-box-stat">{m.runtime} mins</div>
                </div>
                <div className="g-moviedetailbox-details__statboxes-box">
                    <div className="g-moviedetailbox-details__statboxes-box-title">Box Office:</div>
                    <div className="g-moviedetailbox-details__statboxes-box-stat">{getRevenue()}</div>
                </div>
                <div className="g-moviedetailbox-details__statboxes-box">
                    <div className="g-moviedetailbox-details__statboxes-box-title">Vote Average:</div>
                    <div className="g-moviedetailbox-details__statboxes-box-stat">{m.vote_average} / 10</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetailsBox