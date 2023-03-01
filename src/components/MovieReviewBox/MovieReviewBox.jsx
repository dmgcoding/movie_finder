
import React,{useState} from 'react'
import left_arrow_icon from '../../assets/left_arrow.png'
import right_arrow_icon from '../../assets/right_arrow.png'
import review_avatar from '../../assets/avatar.png'
import './MovieReviewBox.css'

const MovieReviewBox = ({reviews}) => {
    console.log(reviews)
    const currentNo = (reviews.total_results/2).toFixed(0)
    console.log(reviews.total_results)
    console.log(reviews.total_results/2)
    console.log((reviews.total_results/2).toFixed(0))

    const [currentReview, setCurrentReview] = useState(reviews.results[currentNo])
    const [num, setNum] = useState(currentNo)

    function buildImgUrl(){
        let str = currentReview.author_details.avatar_path
        if(currentReview.author_details === undefined || currentReview.author_details === null){
            return null
        }
        else if(currentReview.author_details.avatar_path === null){
            return null
        }
        else if(currentReview.author_details.avatar_path.includes('https:')){
            str = str.substring(1)
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

    console.log(currentReview)

  return (
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
  )
}

export default MovieReviewBox