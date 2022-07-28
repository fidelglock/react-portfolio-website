import React from 'react'
import BIO from '../../assets/sourav-bio-data.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={BIO} download className='btn'>Bio-data</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA