import React, { useEffect } from "react";
import "./HeroSection.css";
import { Link as LinkS } from "react-scroll";
import Aos from "aos";
import img from "../../images/home.jpg";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className='home-section' id='home'>
        <img src={img} className='home-bg' />
        <div className='container'>
          <div className='row min-vh-100'>
            <div className='home-text' data-aos='fade-up'>
              <h1>Delis House</h1>
              <p>
                we serve hygenic & hand made food in best quality to your
                doorsteps.
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
