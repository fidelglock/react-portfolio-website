import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Summary from './components/summary/Summary'
import Skills from './components/skills/Skills'
import Internship from './components/internship/Internship'

export const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <Summary/>
    <Skills/>
    <Internship/>
    <About/>
    
    {/* <Experience/> */}
    <Services/>
    
    <Testimonials/>
    <Contact/>
    <Portfolio/>
    <Footer/>
    </>
  )
}

export default App;