import React from 'react'
import {BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="__blank"><BsLinkedin/></a>
        <a href="https://twitter.com" target="__blank"><BsTwitter/></a>
        <a href="https://instagram.com/_bong_vibes_?igshid=YmM0MjE2YWMzOA==" target="__blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials