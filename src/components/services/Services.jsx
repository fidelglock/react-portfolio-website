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
          <h3>EFX-CMV</h3>
          <small>EFX Credit Model View is a Core Data Service provided to users who
demand different credit scores according to different credit modelling
applications developed in C++ and hosted via Spring REST api services
that are consumed by data intensive Java microservices running in
Google Dataflow while being automated with Jenkins pipelines that are
triggered as per requirement.</small>
        </div>
        <ul className='service__list'>
          <h2>Role</h2>
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
          <h3>SKY-DE</h3>
          <small>SKY-DE is the german venture of the british broadcasting and
telecommunications conglomerate - SKY UK Ltd under which the users
are provided various entitlements for subscribing to television channels
and content delivery networks through controlled workflows originating
from a front-end React web application deployed on Salesforce cloud
servers and ending with a REST request to SKY UK main API server.
The middle tier consisted of several microservices dedicated to
business specific operations via Kafka event streaming including basic
responsibilities like authorization, authentication, validation and
verification.</small>
        </div>
        <ul className='service__list'>
        <h2>Role</h2>
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
          <h3>Johnson Controls L-1.5 Service Desk</h3>
          <small>L-1.5 Service is formed after combining Level 1 and Level 2 Enterprise Shared Services in which Support Analysts are responsible for providing
technical support as well as on-call support for users who report
issues/defects within a Business Information System owned by the
client and is being used for day-to-day business operations including
logistics, accounts, payment, access provisioning, purchase order,
Procure-To-Pay cycle, supply chain, inventory management,
generate/publish weekly/monthly/quarterly reports.</small>
        </div>
        <ul className='service__list'>
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