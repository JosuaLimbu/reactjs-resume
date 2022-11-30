import React from 'react'
import { Link } from 'react-scroll'

function Contact() {
  return (
    <div>
        
  <section id="contact">
    <div className="row section-head">
      <div className="two columns header-col">
        <h1><span>Get In Touch.</span></h1>
      </div>
      <div className="ten columns" data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" data-aos-duration="1000">
        <p className="lead">Whether the technology itself is good or bad depends on the people who use it. I hope that we can
         utilize the technology in accordance with the benefits and purpose of the technology itself. So that there is no 
         misuse that can harm ourselves and others. If you wish to contact me, please fill out the form below.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="eight columns" data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" data-aos-duration="1000">
       
        <form action method="post" id="contactForm" name="contactForm">
          <fieldset>
            <div>
              <label htmlFor="contactName">Name <span className="required">*</span></label>
              <input type="text" defaultValue size={35} id="contactName" name="contactName" />
            </div>
            <div>
              <label htmlFor="contactEmail">Email <span className="required">*</span></label>
              <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
            </div>
            <div>
              <label htmlFor="contactSubject">Subject</label>
              <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
            </div>
            <div>
              <label htmlFor="contactMessage">Message <span className="required">*</span></label>
              <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
            </div>
            <div>
              <button className="submit">Submit</button>
              <span id="image-loader">
                <img alt src="images/loader.gif" />
              </span>
            </div>
          </fieldset>
        </form> 
      
        <div id="message-warning"> Error boy</div>
      
        <div id="message-success">
          <i className="fa fa-check" />Your message was sent, thank you!<br />
        </div>
      </div>
      <aside className="four columns footer-widgets" data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" data-aos-duration="1000">
        <div className="widget widget_contact">
          <h4>Address and Phone</h4>
          <p className="address">
          <span>Josua Limbu</span><br />
              <span>Jl. Arnold Mononutu, Airmadidi Bawah, Kec. Airmadidi, Kab. Minahasa Utara,<br/>Sulawesi Utara 95371
              </span><br />
              <span>(+62)813-3501-8574</span><br />
              <span>s2200409@student.unklab.ac.id</span>
          </p>
        </div>
        <div className="widget widget_tweets">
          <h4 className="widget-title">Latest Tweets</h4>
          <ul id="twitter">
            <li>
              <span>
              Josua Limbu, a student at the University of Klabat, majoring in informatics, has won 85
              medals from the International Math & Science Olympiads. Read the article, "When the Name of Indonesia Makes a Scent on the
              International Arena Thanks to the Students" in full at
                <a href="https://www.instagram.com/joli23__/?hl=id"> https://www.instagram.com/joli23__</a>
              </span>
              <b><a href="#">2 Days Ago</a></b>
            </li>
            <li>
              <span>
              Josua Limbu succeeded in making Indonesia proud in the field of physics. The physics team brought 
              home five medals from the 2022 International Physics Olympiad (IPhO) in Zurich. Read detikedu's article, 
              "When the Name of Indonesia Smells Good on the International Arena Thanks to Students" in full at
                <a href="https://www.instagram.com/joli23__/?hl=id"> https://www.instagram.com/joli23__</a>
              </span>
              <b><a href="#">3 Days Ago</a></b>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section> 
  <footer>
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          <li><a href="#"><i className="fa fa-instagram" /></a></li>
          <li><a href="#"><i className="fa fa-dribbble" /></a></li>
          <li><a href="#"><i className="fa fa-skype" /></a></li>
        </ul>
        <ul className="copyright">
          <li>© Copyright 2022 Limbu, Josua</li>
          <li>Design by <a href="https://classroom.google.com/" title="Styleshout" target="_blank">Josua Limbu</a></li>   
        </ul>
      </div>
      <div id="go-top"><Link to="home" spy={true} smooth={true} offset={0} duration={2500} title="Back to Top" ><i className="icon-up-open" /></Link></div>
    </div>
  </footer> 
    </div>
  )
}

export default Contact