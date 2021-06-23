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
          src='https://user-images.githubusercontent.com/64243059/123098305-ec1c7380-d428-11eb-926a-d1a9d3b98d22.PNG'
          className='home-bg'
        />
        <div className='container'>
          <div className='row min-vh-100'>
            <div className='home-text' data-aos='fade-up'>
              <h1>Signature cafe</h1>
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
