import React from 'react'
import './services.css'
import {BsShieldCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I have worked on</h5>
      <h2>Work Experience</h2>
      <div className="container services__container">
        <article className="service">
        <div className="service__head">
          <h1><i>LTIMindtree</i></h1>
          <h3>Software Engineering Specialist</h3>
          <small>DataOps & Core Data Services</small>
        </div>
        <ul className='service__list'>
          {/* <h2>Role</h2> */}
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Analysis of resource utilization for optimizing usage of cloud
resources.</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Enhancing microservices with new features to accept input data
coming from multiple-sources and consuming different REST
API services as per data formats.</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Data extraction from Big-Datasets and segregating into test-data
and maintaining documentation on a monthly basis.</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Work related to fixing bugs, resolving schema-mismatches,
debugging Java and Groovy code.</p>
          </li>
        </ul>
        </article>

        <article className="service">
        <div className="service__head">
        <h1>Accenture</h1>
          <h3>Application Development Senior Analyst</h3>
          <small>Microservice development</small>
        </div>
        <ul className='service__list'>
        {/* <h2>Role</h2> */}
        <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Providing architectural consultation for Java microservices
enabling package subscriptions, device registration, activation
and cancellation.</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Developing new microservices and migrating older
microservices from Akka framework to Spring Boot.</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>R &amp; D work for back-end enhancements and performance
improvement and maintaining documentation in Confluence.</p>
          </li>
        </ul>
        </article>

        <article className="service">
        <div className="service__head">
        <h1>Infosys</h1>
          <h3>Senior Systems Engineer</h3>
          <small>Application Support</small>
        </div>
        <ul className='service__list'>
        {/* <h2>Role</h2> */}
        <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Providing continuous application support by recording Incidents
in Web-based Console for Ticketing.</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Resolving issues in P2P Cycle, processing Service Requests
related to User Access Provisioning, monitoring of progress
while upholding SLA, Generating custom report templates, creating approval workflow.</p>
          </li>
          <li>
            <BsShieldCheck className='service__list-icon'/>
            <p>Development of customized reports, integrating with E-biz
server.</p>
          </li>
        </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services