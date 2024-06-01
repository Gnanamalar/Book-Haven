import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Book Haven</h2>
            <p className='fs-17'>Welcome to Book Haven, where we're passionate about connecting readers with their next great read. Our mission is to foster a love for literature by providing a diverse selection of books and fostering a vibrant community of readers.
At Book Haven, we believe in the power of storytelling to inspire, educate, and entertain. Whether you're a seasoned bookworm or just beginning your reading journey, we're here to support you every step of the way.</p>
            <p className='fs-17'>Join us in celebrating the joy of reading and exploring the endless possibilities that books offer. Let's embark on this literary adventure together!

</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
