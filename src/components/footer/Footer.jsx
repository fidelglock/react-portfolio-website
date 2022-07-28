import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {ImInstagram} from 'react-icons/im'
import {FiTwitter} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className='footer__logo'></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com"><AiOutlineLinkedin/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
        <a href="https://instagram.com"><ImInstagram/></a>
        <a href="https://api.whatsapp.com/send?phone=9851853694"><BsWhatsapp/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; fgh web hosting. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
