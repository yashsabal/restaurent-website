import React, { useEffect } from "react";
import "../HeroSection/HeroSection.css";
import "./About.css";
import Aos from "aos";
import { Link as LinkS } from "react-scroll";
import img from "../../images/about.jpg";
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
              <h3>Why one should choose our food?</h3>
              <li>
                we serve love infused with flavours you cant resist drooling
                over!
              </li>
              <li>we prepare your meal while you grill(at gym, ofcourse)!</li>
              <li>one solution for your fitness goals</li>
              <li>
                No worries of safety and security of food, we take care of all.
              </li>
              <LinkS
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-80}
                to='menu'
                className='btn'
              >
                Check Our Menu
              </LinkS>
            </div>
            <div className='about-img'>
              <div className='img-box' data-aos='fade-left'>
                <h2>Without 'Food' life's incomplete</h2>
                <img src={img} className='about img' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
