import React, { useRef } from "react";
import './contact.css';
import Walmart from '../assets/wal.png';
import Adobe from '../assets/ado.png';
import Microsoft from '../assets/mirc (1).png';
import Facebook from '../assets/fac.png';
import FacebookIcon from '../assets/fa-ic.png';
import TwitterIcon from '../assets/tw-ic.png';
import YoutubeIcon from '../assets/yt-ic.png';
import InstagramIcon from '../assets/in-ic.png';
import emailjs from '@emailjs/browser';
const Contact =()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bchvw05', 'template_u8lttat', form.current, {
            publicKey: 'rF8ZX27pG_IVNg_zh',
          })
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent it!')  
            },
            (error) => {
              console.log( error.text);
            },
          );
      };
    
    return(
            <section id="contactPage">
                <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                 <p className="clientDesc">
                   I have had the opportunity to work with a diverse group of companies.
                some of the notable companies i had worked with includes
                 </p>
                 <div className="clientImgs">
                 <img src={Walmart} className="clientImg"></img>
                 <img src={Adobe} className="clientImg"></img>
                 <img src={Microsoft} className="clientImg"></img>
                 <img src={Facebook} className="clientImg"></img>
                 </div>
                </div>

                <div id="contact">
               <h1 className="contactPageTitle">Contact ME</h1>
               <span className="contactDesc">Please fill out th form below to discuss any work opportunities.</span>
               <form className="contactForm" ref={form} onSubmit={sendEmail}>
                  <input type="text" className="name" placeholder="your name" name="your_name"></input>
                  <input type="email" className="email" placeholder="email" name="your_email"></input>
                  <textarea className="msg" name="message" rows="5" placeholder="your message"></textarea>
                  <button type="submit" value="send" className="submitBtn">Submit</button>
                  <div className="links">
                          <img src={FacebookIcon} className="link"/>
                          <img src={TwitterIcon} className="link"/>
                          <img src={YoutubeIcon} className="link"/>
                          <img src={InstagramIcon} className="link"/>
                  </div>
               </form>
                </div>
            </section>
    )   
}
export default Contact;