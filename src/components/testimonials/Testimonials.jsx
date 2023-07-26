import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/fgh.jpg'
import AVTR2 from '../../assets/master-chief.webp'
import AVTR3 from '../../assets/capt-price.webp'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  
  {
    avatar: AVTR2,
    name: 'Master Chief',
    review: 'Anubhav displays the right mix of passion and composure. He is passionate about work, help, conversations, gaming, food and just about everything'
  },
  {
    avatar: AVTR3,
    name: 'Capt. Price',
    review: 'Anubhav does not wake up in the morning thinking this is his last day on Earth. But he thinks that is a luxury, not a curse.'
  },
  {
    avatar: AVTR1,
    name: 'F.G',
    review: 'There is no word like mediocre in his dictionary. Anubhav believes in living life king size and has the courage and vision to achieve it. Actually he is not satisfied with anything and is in a constant need to do more and get more.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Swipe to read my friends think of me</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>         
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
