
import React from 'react'
import left_arrow_icon from '../../assets/left_arrow.png'
import right_arrow_icon from '../../assets/right_arrow.png'
import review_avatar from '../../assets/review_avatar.jpeg'
import './MovieReviewBox.css'

const MovieReviewBox = () => {
  return (
    <div className='g-moviereviewbox'>
        <div className="g-moviereviewbox-arrowbox">
            <img src={left_arrow_icon} alt="previous" />
        </div>
        <div className="g-moviereviewbox-contentbox">
            <div className="g-moviereviewbox-contentbox__avatarbox">
                <img src={review_avatar} alt="avatar" />
                <p>garethmb</p>
            </div>
            <div className="g-moviereviewbox-contentbox__review">
            "The epic Marvel Saga that started over ten years ago has been building up to the inevitable clash with the powerful tyrant Thanos (Josh Brolin). Last year’s “Avengers: Infinity War” set the stage for the highly-anticipated conclusion; “Avengers: End Game” and at long last it has arrived.\r\n\r\nPicking up shortly after the events of the last film, the Avengers must deal with the aftermath of what Thanos has done. The team is naturally divided between wanting revenge, wanting to set things right, and just wanting to take what they have and go on. \r\n\r\nAs time passes and they struggle to accept the reality of their situation; an unexpected individual returns and 
            </div>
        </div>
        <div className="g-moviereviewbox-arrowbox">
            <img src={right_arrow_icon} alt="next" />
        </div>
    </div>
  )
}

export default MovieReviewBox