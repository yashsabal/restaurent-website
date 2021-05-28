import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <section className='home-section' id='home'>
        <img
          src='https://www.stayflexi.com/ROOT.war/media/user_21905/cuisinefoodindiajpg'
          className='home-bg'
        />
        <div className='container'>
          <div className='row min-vh-100'>
            <div className='home-text'>
              <h1>Boffouge cafe & bistro</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat rem tempore eligendi corporis consequatur.
              </p>
              <a href='' className='btn btn-default'>
                Over Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
