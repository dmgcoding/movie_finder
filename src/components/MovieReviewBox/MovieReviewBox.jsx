
import React,{useState, useEffect} from 'react'
import left_arrow_icon from '../../assets/left_arrow.png'
import right_arrow_icon from '../../assets/right_arrow.png'
import review_avatar from '../../assets/avatar.png'
import './MovieReviewBox.css'

const MovieReviewBox = ({reviews}) => {
    //eg reviews: {id: <id>,page: <page>,results: [...],...}
    
    //set current review from middle of the reviews list
    const currentNo = ((+reviews.results.length - 1)/2).toFixed(0)
    const initialReview = reviews.results[currentNo]
    const [currentReview, setCurrentReview] = useState(initialReview)
    const [num, setNum] = useState(currentNo)

    //some reviews don't have author details. if it is null return null 
    //some have whole url return same 
    //some only get name part.for that build the img url and return
    function buildImgUrl(){
        if(currentReview === undefined)return null
        let str = currentReview.author_details.avatar_path
        if(currentReview.author_details === undefined || currentReview.author_details === null){
            return null
        }
        else if(currentReview.author_details.avatar_path === null){
            return null
        }
        else if(currentReview.author_details.avatar_path.includes('https:')){
            str = str.substring(1)//url comes like '/https://... so remove the first '/'
        }else{
            str = 'http://image.tmdb.org/t/p/w500'+str
        }
        return str
    }

    function nextRev(){
        let nextNum = +num + 1
        if(nextNum < reviews.results.length){
            setCurrentReview(reviews.results[nextNum])
            setNum(nextNum)
        }
    }

    function prevRev(){
        let prevNum = +num - 1
        if(prevNum >= 0){
            setCurrentReview(reviews.results[prevNum])
            setNum(prevNum)
        }
    }

  return (
    <div>
    {currentReview === undefined ? (<></>): (
        <div className='g-moviereviewbox'>
        <div className="g-moviereviewbox-arrowbox" onClick={prevRev}>
            <img src={left_arrow_icon} alt="previous" />
        </div>
        <div className="g-moviereviewbox-contentbox">
            <div className="g-moviereviewbox-contentbox__avatarbox">
                <img src={buildImgUrl() === null ? review_avatar : buildImgUrl()} alt="avatar" />
                <p>{currentReview.author}</p>
            </div>
            <div className="g-moviereviewbox-contentbox__review">
            "{currentReview.content}"
            </div>
        </div>
        <div className="g-moviereviewbox-arrowbox" onClick={nextRev}>
            <img src={right_arrow_icon} alt="next" />
        </div>
    </div>
    )}
    </div>
  )
}

export default MovieReviewBox