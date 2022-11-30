import React from 'react'
import { Link } from 'react-scroll'
import './index.css'

const  Navbar = () => {
  return (
    <nav id="nav-wrap" data-aos="fade-down" data-aos-easing="ease-in-back"
    data-aos-delay="0"
    data-aos-offset="0"
    data-aos-duration="1300"> 
    <ul id="nav" className="nav">
      <li class="smoothscroll"><Link to="home" spy={true} smooth={true} offset={0} duration={500}><a>Home</a></Link></li>
      <li><Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link></li>
      <li><Link to="resume" spy={true} smooth={true} offset={0} duration={500}>Resume</Link></li>
      <li><Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}>Works</Link></li>
      <li><Link to="testimonials" spy={true} smooth={true} offset={0} duration={500}>Testimonials</Link></li>
      <li><Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
    </ul> 
    </nav>  
  )
}

export default Navbar