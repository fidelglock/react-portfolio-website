import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import "./summary.css"

const Summary = () => {
  return (
    <section id='summary'>
         <h5>Work experience in brief</h5>
        <h2>Summary</h2>
        <div className="container experience__container">
        <div className="experience__frontend">
          {/* <h3>Full Stack Web Development</h3> */}
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>6 years of experience</h4>
                <small className='text-light'> in analysis, design, development, testing of <b className='tags'>Java</b> <b className='tags'>Microservices</b>, <b className='tags'>REST API</b>, <b className='tags'>Kafka</b> Producer/Consumer under domains – Banking,
                        Logistics, Heavy-Electricals, Media and Tele-communication.</small>
              </div>
            </article>

            

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Experience in Full-Stack</h4>
              <small className='text-light'> development for building multi-tier applications using Oracle ADF,
Oracle JDeveloper, Oracle 11G.</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Deployment, monitoring and maintenance</h4>
              <small className='text-light'> of applications in public cloud providers –
<b className='tags'>AWS</b>, GCP, Heroku.</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Experience in integrating</h4>
              <small className='text-light'> <b className='tags'>SpringBoot</b> applications with SQL/no-SQL databases, AWS
SNS, Google Pub/Sub, AWS API Gateway, AWS Lambda.</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Master’s degree research project</h4>
              <small className='text-light'> on deploying Cloud rendered gaming
applications on public cloud providers and managing/provisioning virtual hardware
using AWS API Gateway, AWS Lambda, MongoDb and <b className='tags'>React.js</b> web application as
front-end and Node.js REST API as back-end.</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Fluent in English</h4>
              <small className='text-light'>while communicating effectively with Client, understanding requirements, interpreting into tasks and sub-tasks and distributing among team members.</small>
              </div>
            </article>

          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Summary