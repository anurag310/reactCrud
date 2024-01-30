import React from 'react'
import './Footer.css'
import githubImage from "../assets/Github.jpeg"
import twitterImage from "../assets/Twitter.png"
import linkedinImage from "../assets/Linkedin.jpeg"
import telegramImage from "../assets/Telegram.png"
import instagramImage from "../assets/instagram.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className=' sb_footer section_padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links-div'>
            <h4>Social Media</h4>
            <p>
              <img src={githubImage} alt=''  className=' w-10 h-10'/>
              Github
            </p>
            <p>
              <img src={linkedinImage} alt='' className=' w-10 h-10' />
              LinkedIn
            </p>
            <p>
              <img src={telegramImage} alt='' className=' w-10 h-10' />
              Telegram
            </p>
            <p>
              <img src={instagramImage} alt='' className=' w-10 h-10' />
              Instagram
            </p>
            <p>
              <img src={twitterImage} alt='' className=' w-10 h-10' />
              Twitter
            </p>
          </div>
          <div className=' sb__footer-links_div'>
            <h4>Resources</h4>
            <a href='/resources for current student'>
              <p>Resources for Current Student</p>
            </a>
            <a href='/library'>
              <p> Library</p>
            </a>
            <a href='/resources for faculty & staff'>
              <p>Resources for faculty & staff</p>
            </a>
            <a href='/office'>
              <p>Office</p>
            </a>
            <a href='/alumni'>
              <p>Alumni</p>
            </a>
            <a href='/sports'>
              <p>Sports</p>
            </a>
          </div>
          <div className=' sb__footer-links_div'>
            <h4>About</h4>
            <a href='/future and current student'>
              <p>Future and current student</p>
            </a>
            <a href='/academic programs'>
              <p> Academic programs</p>
            </a>
            <a href='/research'>
              <p>Research</p>
            </a>
            <a href='/career'>
              <p>Career</p>
            </a>
            <a href='/contact'>
              <p>Contact</p>
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className=' sb__footer-below'>
        <div className=' sb__footer-copyright'>
          <p>@{new Date().getFullYear()} CodeInn . All right reserved .</p>
        </div>
        <div className='sb__footer-below-links'></div>
        <a href='/terms'>
          <div>
            <p>Terms & Condition</p>
          </div>
        </a>
        <a href='/Privacy'>
          <div>
            <p>Privacy</p>
          </div>
        </a>
        <a href='/security'>
          <div>
            <p>Security</p>
          </div>
        </a>
        <a href='/cookie'>
          <div>
            <p>Cookie declaration</p>
          </div>
        </a>
      </div>
    </div>
  )
}
export default Footer
