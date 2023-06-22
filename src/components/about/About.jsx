import React from 'react'
import './about.css'
import ME from '../../assets/dibx3.jpg'
import {FaAward} from 'react-icons/fa'
import {BsCalendarWeek} from 'react-icons/bs'
import {BiLocationPlus} from 'react-icons/bi'
import {SiBmcsoftware} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <SiBmcsoftware className='about__icon'/>
              <h5>Work</h5>
              <small>Content Creator</small>
            </article>

            <article className='about__card'>
              <BsCalendarWeek className='about__icon'/>
              <h5>Birthday</h5>
              <small>February 9</small>
            </article>

            <article className='about__card'>
              <BiLocationPlus className='about__icon'/>
              <h5>Place</h5>
              <small>Jalpaiguri, WB</small>
            </article>
          </div>
          <p>
          Things that i have done for the love of nature, are just unimaginable..
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

