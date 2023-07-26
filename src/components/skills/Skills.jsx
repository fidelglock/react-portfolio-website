import React from 'react'
import {AiOutlineCode, AiOutlineAntCloud} from 'react-icons/ai'
import {DiLinux} from 'react-icons/di'
import {BsTools} from 'react-icons/bs'
import {TbCertificate, TbLanguageHiragana} from 'react-icons/tb'
import {GiPistolGun} from 'react-icons/gi'
import {MdOutlineDomainDisabled} from 'react-icons/md'

const Skills = () => {
  return (
    <section id='skills'>
        <h5>Summary of my capabilities</h5>
        <h2>Skills</h2>
        <div className='wrapper'>
        <div className="about__cards">
            <article className='about__card'>
              <MdOutlineDomainDisabled className='about__icon'/>
              <h5>Domain</h5>
              <small>Banking, Logistics, Heavy-Electricals, Media, Telecommunications</small>
            </article>

            <article className='about__card'>
              <AiOutlineCode className='about__icon'/>
              <h5>Programming Languages</h5>
              <small>Java, SQL, PL/SQL, JavaScript, HTML, CSS</small>
            </article>

            <article className='about__card'>
              <DiLinux className='about__icon'/>
              <h5>Operating System / ERP Version</h5>
              <small>Linux Debian, Ubuntu, CentOS, Android.
Windows XP SP3, 7, 10,11.</small>
            </article>
            <article className='about__card'>
              <BsTools className='about__icon'/>
              <h5>Tools / DB /
Packages /
Framework / ERP
Components</h5>
              <small>Spring Boot, Hibernate, Akka, Apache Kafka, Apache Avro, Apache
Beam, Google Dataflow, Java Server Faces, Oracle JDeveloper,
Oracle SQL Developer, Oracle Xpress 11, Oracle E-BS,Oracle
Reports builder, Oracle SQL Loader, Oracle Workflow Builder.</small>
            </article>

            <article className='about__card'>
              <TbCertificate className='about__icon'/>
              <h5>Certifications</h5>
              <small>IBM professional certification on Core Java, Ardent Industrial certification on Android App
Development, Tech-Defense Level 1 ethical hacking certification.</small>
            </article>


            <article className='about__card'>
              <TbLanguageHiragana className='about__icon'/>
              <h5>Languages</h5>
              <small>English, Bengali, Hindi, German, Italian</small>
            </article>
          </div>
          </div>
    </section>
  )
}

export default Skills