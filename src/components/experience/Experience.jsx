import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Professional life</h5>
      <h2>Work Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>LTIMindtree</h3>
          <h2>EFX-CMV</h2>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Description</h4>
              <small className='text-light'>EFX Credit Model View is a Core Data Service provided to users who
demand different credit scores according to different credit modelling
applications developed in C++ and hosted via Spring REST api services
that are consumed by data intensive Java microservices running in
Google Dataflow while being automated with Jenkins pipelines that are
triggered as per requirement.</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Role</h4>
              <small className='text-light'>Analysis of resource utilization for optimizing usage of cloud
resources, Enhancing microservices with new features to accept input data
coming from multiple-sources and consuming different REST
API services as per data formats, Work related to fixing bugs, resolving schema-mismatches,
debugging Java and Groovy code, Data extraction from Big-Datasets and segregating into test-data
and maintaining documentation on a monthly basis.</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tools</h4>
              <small className='text-light'>Java 8, Apache Avro, Apache Beam, Google Dataflow, Google Storage,
Google PubSub, Google Cloud Function, Jenkins, Spring Tool Suite,
IntelliJ Idea.</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Team size</h4>
              <small className='text-light'>13</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__frontend">
          <h3>Education</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Class X</h4>
              <small className='text-light'>Passed</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Class XII</h4>
              <small className='text-light'>Passed</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>College</h4>
              <small className='text-light'>Graduated</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__frontend">
          <h3>Education</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Class X</h4>
              <small className='text-light'>Passed</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Class XII</h4>
              <small className='text-light'>Passed</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>College</h4>
              <small className='text-light'>Graduated</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
        <h3>Profession</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML-CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
