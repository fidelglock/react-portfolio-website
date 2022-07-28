import React, {useRef} from 'react'
import './contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {BsTelegram, BsWhatsapp} from 'react-icons/bs'
import {AiOutlineSkype} from 'react-icons/ai'
import emailjs from 'emailjs-com'
import {ToastContainer, toast} from "react-toastify"

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ocp6deo', 'template_hdyuq0f', form.current, 'TMHA7SGdyIK-3Y3Oe')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
          
      });
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2 className='h2__text'>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAttachEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abc@abc.com</h5>
            <a href="mailto:glockman1326@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Renegades</h5>
            <a href="https://t.me/renegadesforever" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Inbox</h5>
            <a href="https://api.whatsapp.com/send?phone=9775878037" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name='email' placeholder='Your email address' required/>
          <textarea name="message" rows="7" placeholder='Tell me' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
    
        </form>
      </div>
    </section>
  )
}

export default Contact


// for messenger - https://m.me/<facebook id>