import React from 'react'
import '../footer/Footer.css'
import Logo from '../../assets/images/medical-logo.png'
import Face from '../../assets/images/facebook_icon.png'
import Linke from '../../assets/images/twitter_icon.png'
import Twit from '../../assets/images/linkedin_icon.png'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footermain">
        <div className="footer-left">
          <img src={Logo} alt="" className='logo' />
          <div className="num">
            <p>+19 99XXXXXX21</p>
            <p>eMail@gmail.com</p>
          </div>
          <div className="social">
            <img src={Face} alt="" />
            <img src={Linke} alt="" />
            <img src={Twit} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h5>About</h5>
          <ul>
            <li>Home</li>
            <li >Admin</li>
            <li>Service</li>
            <li>Clints</li>
          </ul>
        </div>
        <div className="footer-right">
          <h5>Resources</h5>
          <ul>
            <li>Help</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copy">
        <span>copyright 2024 all rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
