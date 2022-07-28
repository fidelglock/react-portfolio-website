import React from 'react'
import './about.css'
import ME from '../../assets/keanu.webp'
import {FaAward} from 'react-icons/fa'
import {BsCalendarWeek} from 'react-icons/bs'
import {BiLocationPlus} from 'react-icons/bi'
import {SiBmcsoftware} from 'react-icons/si'
import {GiPistolGun} from 'react-icons/gi'

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
              <GiPistolGun className='about__icon'/>
              <h5>Work</h5>
              <small>Mercenary</small>
            </article>

            <article className='about__card'>
              <BsCalendarWeek className='about__icon'/>
              <h5>Birthday</h5>
              <small>January 1</small>
            </article>

            <article className='about__card'>
              <BiLocationPlus className='about__icon'/>
              <h5>Place</h5>
              <small>Corner, Junkyard</small>
            </article>
          </div>
          <p>
          I live in a dystopian world in which the society exists on the remnants of world that destroy ed itself while competing with each other to prove who had the power to annihilate the society and getaway with it.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

