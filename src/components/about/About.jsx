import React from 'react'
import './about.css'
// import ME from '../../assets/keanu.webp'
import ME from '../../assets/afgh2.jpg'
import {FaAward} from 'react-icons/fa'
import {BsCalendarWeek} from 'react-icons/bs'
import {BiLocationPlus} from 'react-icons/bi'
import {LiaUniversitySolid} from 'react-icons/lia'
import {MdWorkOutline} from 'react-icons/md'
import {PiStudentDuotone, PiStudentFill, PiCertificateDuotone}from 'react-icons/pi'

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
              <MdWorkOutline className='about__icon'/>
              <h5>Software Specialist</h5>
              <small><i>LTIMindtree</i></small>
            </article>

            <article className='about__card'>
              <BsCalendarWeek className='about__icon'/>
              <h5>Birthday</h5>
              <small>August 18</small>
            </article>

            <article className='about__card'>
              <BiLocationPlus className='about__icon'/>
              <h5>Jalpaiguri</h5>
              <small>West Bengal, India</small>
            </article>
            <article className='about__card'>
              <PiStudentDuotone className='about__icon'/>
              <h5>MSc in ICT</h5>
              <small>Technical University of Berlin, Germany</small>
            </article>
            <article className='about__card'>
              <LiaUniversitySolid className='about__icon'/>
              <h5>MSc in Technology</h5>
              <small>Aalto University, Finland</small>
            </article>
            <article className='about__card'>
              <PiCertificateDuotone className='about__icon'/>
              <h5>BTech in IT</h5>
              <small>JGEC, Jalpaiguri</small>
            </article>
          </div>
          <p>
          I am proud to be an Indian citizen who has the ability to understand computers and use my expert thinking to propose business solutions with the help of various software development platforms, frameworks, scripting languages, tools and deployment technologies. When I am not working, I keep myself busy with Art&Craft, Photography and Travelling.
          </p>
          <a href='https://fgh-bike-photos.s3.eu-north-1.amazonaws.com/bikes/master-cert.pdf' className='btn btn-primary'>Degree Certificate</a>
        </div>
      </div>
    </section>
  )
}

export default About

