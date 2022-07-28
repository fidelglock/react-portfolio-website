import React from 'react'
import BIO from '../../assets/book.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={BIO} download className='btn'>Dont click</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA