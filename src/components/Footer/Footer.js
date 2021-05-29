import React from "react";
import "../HeroSection/HeroSection.css";
import "../About us/About.css";
import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className='footer'>
        {/* <img
          
          alt=''
          className='home-bg'
        /> */}
        <div className='container'>
          <div className='row'>
            <div className='footer-item'>
              <h3>Our location</h3>
              <p>
                xyz street, near xyz place,
                <br /> Nagpur-446789
              </p>
            </div>
            <div className='footer-item'>
              <h3>opening hours</h3>
              <p>
                monday to sunday <br />
                9:00 AM - 10:00 PM
              </p>
            </div>
            <div className='footer-item'>
              <h3>contact us</h3>
              <p>
                +91-3492946940 <br /> youremail@gmail.com
              </p>
              <div className='social-links'>
                <a href='#'>
                  <FaInstagram className='ig' />
                </a>
                <a href='#'>
                  <FaFacebook className='fb' />
                </a>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='copyright'>
              &copy; copyright {new Date().getFullYear()} <br />
              This website belongs to yash
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
