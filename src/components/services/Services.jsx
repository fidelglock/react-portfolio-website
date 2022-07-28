import React from 'react'
import './services.css'
import {BsShieldCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
        <div className="service__head">
          <h3>24x7 Support</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>When you are in trouble, I will do everything to help you</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>When you are alone, I will protect you with my life</p>
          </li>
        </ul>
        </article>

        <article className="service">
        <div className="service__head">
          <h3>Cooking</h3>
        </div>
        <ul className='service__list'>
        <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Dry Maggie</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Omlette</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Butter Toast</p>
          </li>
        </ul>
        </article>

        <article className="service">
        <div className="service__head">
          <h3>Security</h3>
        </div>
        <ul className='service__list'>
        <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Gate Sentry</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Remote Surveillance</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Reconnaissance</p>
          </li>
        </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services