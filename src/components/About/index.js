import React from 'react'

function About() {
  return (
    <section id="about">
    <div className="row">
    <br/>
      <div className="three columns">
        <img className="profile-pic" src="images/profilepic.jpg" alt />
      </div>
      <div className="nine columns main-col" data-aos="fade-down" data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          data-aos-duration="1000">
        <h2>About Me</h2>
        <p>My name is Josua Limbu, I'm from Palu, Central Sulawesi, Indonesia. I am a student at Klabat University until now. I have a passion in Graphic Design, Photography and Development of Several Web-Based Information Applications, 
          and another addition is Sports. Therefore, I am very happy to implement and share what I already know and have with others, so that it becomes very useful, especially in the world of education, which I have been involved in for several years.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Josua Limbu</span><br />
              <span>Jl. Arnold Mononutu<br />
              Airmadidi Bawah, Kec. Airmadidi, Kabupaten Minahasa Utara,<br/>Sulawesi Utara 95371
              </span><br />
              <span>(+62)813-3501-8574</span><br />
              <span>s2200409@student.unklab.ac.id</span>
            </p>
          </div>
          <div className="columns download">
            
          </div>
        </div> 
      </div> 
    </div>
  </section> 
  )
}

export default About