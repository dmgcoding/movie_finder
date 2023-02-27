
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
            <div className='footer__content__repolink'>
                <img src={github_icon} alt='github' width={25} />
                <a href='#'><p>View Code</p></a>
            </div>
            <a><p>Powered by The Movie DB</p></a>
        </div>
    </div>
  )
}

export default Footer