import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p></p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

        </div>
          <div className="footer-content-center">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
         
        </div>
        <div className="footer-content-right">

         <h2>Get In Touch</h2>
         <ul>
          <li>+33 08 56 10 60 74</li>
          <li>contact@tomato.fr </li>
         </ul>

        </div>
      </div>
      <hr />
     <p className="footer-copyright">copyright 2024 © Tomato.fr - ALL Rights Reserved.</p>
    </div>
  )
}

export default Footer