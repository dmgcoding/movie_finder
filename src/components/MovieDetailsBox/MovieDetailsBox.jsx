import React from 'react'
import movie_poster from '../../assets/movie_poster.jpg'
import './MovieDetailsBox.css'

const MovieDetailsBox = ({movie}) => {
  return (
    <div className='g-moviedetailbox'>
        <div className='g-moviedetailbox-img'>
            <img src={movie_poster} alt='movie img'/>
        </div>
        <div className='g-moviedetailbox-details'>
            <h1>Avengers: Endgame</h1>
            <h2>Avenge the fallen.</h2>
            <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.</p>
            <div className="g-moviedetailbox-details__studio">
                <div className="g-moviedetailbox-details__studio-genre">
                Adventure, Science Fiction, Action
                </div>
                <div className="g-moviedetailbox-details__studio-studio">
                Marvel Studios
                </div>
            </div>
            <div className="g-moviedetailbox-details__statboxes">
                <div className="g-moviedetailbox-details__statboxes-box">
                    <div className="g-moviedetailbox-details__statboxes-box-title">Release Date</div>
                    <div className="g-moviedetailbox-details__statboxes-box-stat">2019-04-24</div>
                </div>
                <div className="g-moviedetailbox-details__statboxes-box">
                    <div className="g-moviedetailbox-details__statboxes-box-title">Running Time:</div>
                    <div className="g-moviedetailbox-details__statboxes-box-stat">181 mins</div>
                </div>
                <div className="g-moviedetailbox-details__statboxes-box">
                    <div className="g-moviedetailbox-details__statboxes-box-title">Box Office:</div>
                    <div className="g-moviedetailbox-details__statboxes-box-stat">$2,797,800,564</div>
                </div>
                <div className="g-moviedetailbox-details__statboxes-box">
                    <div className="g-moviedetailbox-details__statboxes-box-title">Vote Average:</div>
                    <div className="g-moviedetailbox-details__statboxes-box-stat">8.269 / 10</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetailsBox