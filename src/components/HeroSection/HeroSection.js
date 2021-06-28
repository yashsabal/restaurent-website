import React, { useEffect } from "react";
import "./HeroSection.css";
import { Link as LinkS } from "react-scroll";
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
          src='https://image.freepik.com/free-vector/dark-abstract-background-texture-with-diagonal-lines_43969-660.jpg'
          className='home-bg'
        />
        <div className='container'>
          <div className='row min-vh-100'>
            <div className='home-text' data-aos='fade-up'>
              <h1>Chai Villa</h1>
              <p>
                we serve hygenic & hand made chai in best quality mobile
                containers.
              </p>
              <LinkS
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-80}
                to='menu'
                className='btn btn-default'
              >
                Our Menu
              </LinkS>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
