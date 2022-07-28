import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/border.jpg'
import IMG2 from '../../assets/hera-pheri.jpg'
import IMG3 from '../../assets/lagaan.jpg'
import IMG4 from '../../assets/baghban.jpg'
import IMG5 from '../../assets/awarapan.jpg'
import IMG6 from '../../assets/bhool-bhulaiya.jpg'
import IMG7 from '../../assets/cdi.jpg'
import IMG8 from '../../assets/wanted.jpg'
import IMG9 from '../../assets/kahaani.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Border',
    imdb: 'https://www.imdb.com/title/tt0118751/',
    demo: 'https://www.youtube.com/watch?v=ryY3Iff8hfg'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hera Pheri',
    imdb: 'https://www.imdb.com/title/tt0213890/',
    demo: 'https://www.youtube.com/watch?v=WVjutHfxtDo'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Lagaan',
    imdb: 'https://www.imdb.com/title/tt0169102/?ref_=fn_al_tt_1',
    demo: 'https://www.youtube.com/watch?v=69t0c9zpETc'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Baghban',
    imdb: 'https://www.imdb.com/title/tt0337578/',
    demo: 'https://www.youtube.com/watch?v=vKgA_-NUtjE'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Awarapan',
    imdb: 'https://www.imdb.com/title/tt1020937/',
    demo: 'https://www.youtube.com/watch?v=Vw-Xhc4utQY'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Bhool Bhulaiyaa',
    imdb: 'https://www.imdb.com/title/tt0995031/',
    demo: 'https://www.youtube.com/watch?v=jzYxbnHHhY4'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Chak De India',
    imdb: 'https://www.imdb.com/title/tt0871510/',
    demo: 'https://www.youtube.com/watch?v=LGB61HyL-IQ'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Wanted',
    imdb: 'https://www.imdb.com/title/tt1084972/',
    demo: 'https://www.zee5.com/movies/details/wanted/0-0-2463'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Kahaani',
    imdb: 'https://www.imdb.com/title/tt1821480/',
    demo: 'https://www.zee5.com/movies/details/kahaani-2/0-0-2497'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>I can watch them as many times</h5>
      <h2>My all-time-favorite movies</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, imdb, demo}) => {
            return(
              <article key={id} className="article portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
               <div className="portfolio__item-cta">
               <a href={imdb} className='btn' target='_blank'>IMDB</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Watch</a>
               </div>
            </article>
            )
          })
        }

       

    
      </div>

      
    </section>
  )
}

export default Portfolio