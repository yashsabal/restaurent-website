import React, { useEffect } from "react";
import "../HeroSection/HeroSection.css";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className='about-section min-vh-100 sec-padding' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='section-title'>
              <h2 data-title='our story'>About Us</h2>
            </div>
          </div>
          <div className='row row2'>
            <div className='about-text'>
              <h3>Welcome to crostino cafe</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                cupiditate culpa dicta illum exercitationem quas. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Nemo, maiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                atque!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                cupiditate culpa dicta illum exercitationem quas. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Nemo, maiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur maxime ipsa veniam?
              </p>
              <a href='#' className='btn'>
                Check Our Menu
              </a>
            </div>
            <div className='about-img'>
              <div className='img-box' data-aos='fade-left'>
                <h2>We believe Food Is Important</h2>
                <img
                  src='https://user-images.githubusercontent.com/64243059/120100626-9c080500-c139-11eb-828f-fd894a99ff2c.PNG'
                  alt=''
                  className='about img'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
