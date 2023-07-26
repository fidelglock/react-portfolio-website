import React from 'react'
import {BsCodeSlash} from 'react-icons/bs'
import "./internship.css"

const Internship = () => {
  return (
    <section id='internships'>
         <h5>Student jobs during higher studies</h5>
        <h2>Internships</h2>
        <div className="container experience__container">
        <div className="experience__frontend">
          
          <div className="experience__content">
            {/* <h3>IOSL - DC3</h3> */}
            <article className='experience__details'>
              <BsCodeSlash className='experience__details-icon'/>
              <div>
              <h2>IOSL - DC3</h2>
                <h4>Telekom-Labs</h4>
                <small className='text-light'>Development of a web application using React.js, Node.js, serving as a common platform for provisioning and monitoring package delivery services to
multiple logistic enterprises.
</small>
              </div>
            </article>

            
            {/* <h3>Student Signup</h3> */}
            <article className='experience__details'>
              <BsCodeSlash className='experience__details-icon'/>
              <div>
              <h2>Student Signup Website</h2>
              <h4>Fraunhofer FOKUS</h4>
              <small className='text-light'>Development of a student sign-up website using React.js, Node.js that accepts and processes project applications for students and allows administrator to manage student data by performing CRUD operations.</small>
              </div>
            </article>

           

          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Internship