
import React from 'react'
import './Footer.css'
import github_icon from '../../assets/github-mark.png'

//TODO: ADD LINKS
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__bg"></div>
        <div className="footer__content">
            <p>Designed and developed by shehandmg</p>
            <a target='_blank' href='https://github.com/dmgcoding/movie_finder'><div className='footer__content__repolink'>
                <img src={github_icon} alt='github' width={25} />
                <p>View Code</p>
            </div></a>
            <a target='_blank' href='https://www.themoviedb.org/'><p>Powered by The Movie DB</p></a>
        </div>
    </div>
  )
}

export default Footer