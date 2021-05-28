import React from "react";
import "../HeroSection/HeroSection.css";
import "./About.css";

function About() {
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
              <h3>Welcome to Bouffage cafe & bistro</h3>
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
              <div className='img-box'>
                <h3>20+ year's of experience</h3>
                <img
                  src='https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?size=626&ext=jpg&ga=GA1.2.1214810501.1608681600'
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
