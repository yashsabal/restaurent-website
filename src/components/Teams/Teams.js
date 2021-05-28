import React from "react";
import "../HeroSection/HeroSection.css";
import "../About us/About.css";
import "./Teams.css";

function Teams() {
  return (
    <>
      <section className='team-section min-vh-100 sec-padding' id='team'>
        <div className='container'>
          <div className='row'>
            <div className='section-title'>
              <h2 data-title='team'>Our Chefs</h2>
            </div>
          </div>
          <div className='row'>
            <div className='team-item'>
              <img
                src='https://i.pinimg.com/originals/4f/3f/87/4f3f878009e2a8d276d00eba014e0206.jpg'
                alt=''
              />
              <div className='team-item-info'>
                <h2>raj champal</h2>
                <p>head chef</p>
              </div>
            </div>
            <div className='team-item'>
              <img
                src='https://i.pinimg.com/originals/4f/3f/87/4f3f878009e2a8d276d00eba014e0206.jpg'
                alt=''
              />
              <div className='team-item-info'>
                <h2>raj champal</h2>
                <p>head chef</p>
              </div>
            </div>
            <div className='team-item'>
              <img
                src='https://i.pinimg.com/originals/4f/3f/87/4f3f878009e2a8d276d00eba014e0206.jpg'
                alt=''
              />
              <div className='team-item-info'>
                <h2>raj champal</h2>
                <p>head chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Teams;
