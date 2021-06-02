import React, { useEffect } from "react";
import "./HeroSection.css";
import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className='home-section' id='home'>
        <img
          src='https://lh5.googleusercontent.com/p/AF1QipPqAZbtzJe5crYzseba67lSwd9Rmu7qX_IQcI1V'
          className='home-bg'
        />
        <div className='container'>
          <div className='row min-vh-100'>
            <div className='home-text' data-aos='fade-up'>
              <h1>Crostino cafe</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat rem tempore eligendi corporis consequatur.
              </p>
              <a href='' className='btn btn-default'>
                Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
