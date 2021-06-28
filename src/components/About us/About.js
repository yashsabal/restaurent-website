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
              <h3>Why one should choose our chai?</h3>
              <li>
                Every sip of our Chai & Coffee you drink with us will remind you
                of the taste Mumma ke Hath ki Chai!!
              </li>
              <li>
                Our Chai is made of Mineral Water, Rich Milk, Premium Chai Patti
                (Tea Leaf) with some Great Spices & natural Ingredients like
                Ginger, Cardamom, Dal-chini, Lavang etc.
              </li>
              <li>
                By serving Chai in Kulhad, We provide your drink Desi Touch!!
              </li>
              <li>
                We use Sulfurless Sugar, which keeps your body away from harmful
                So2.
              </li>
              <a href='#' className='btn'>
                Check Our Menu
              </a>
            </div>
            <div className='about-img'>
              <div className='img-box' data-aos='fade-left'>
                <h2>Without 'chai' life's incomplete</h2>
                <img
                  src='https://pipingpotcurry.com/wp-content/uploads/2019/05/How-to-make-Masala-Chai-Piping-Pot-Curry-500x375.jpg'
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
