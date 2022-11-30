import React from 'react'
import { Link } from 'react-scroll'

function Header() {
  return (
    <header id="home" >
    
    <div className="row banner">
      <div className="banner-text" data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-delay="3500" data-aos-offset="0" data-aos-duration="1500">
        <h1 className="responsive-headline">I'm Josua Limbu.</h1>
        <h3><span>I'm a graphic designer, illustrator and web designer based at Klabat University
          who creates awesome and effective visual identities for companies of all sizes around the world.
          Let's get rolling and learn more about me.</span></h3>
        <hr />
        <ul className="social">
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          <li><a href="#"><i className="fa fa-instagram" /></a></li>
          <li><a href="#"><i className="fa fa-dribbble" /></a></li>
          <li><a href="#"><i className="fa fa-skype" /></a></li>
        </ul>
      </div>
    </div>
    <p className="scrolldown">
      <Link to="about" spy={true} smooth={true} offset={0} duration={500}><i className="icon-down-circle" /></Link>
    </p>
  </header> 
  )
}

export default Header