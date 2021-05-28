import React from "react";
import "../HeroSection/HeroSection.css";
import "../About us/About.css";
import "./Menu.css";

function Menu() {
  return (
    <>
      <section className='menu-section min-vh-100 sec-padding' id='menu'>
        <div className='container'>
          <div className='row'>
            <div className='section-title'>
              <h2 data-title='order now'>Our Menu</h2>
            </div>
          </div>
          <div className='row'>
            <div className='menu-tabs'>
              <button type='button' className='menu-tab-item' data-target=''>
                lunch
              </button>
              <button type='button' className='menu-tab-item' data-target=''>
                dinner
              </button>
              <button type='button' className='menu-tab-item' data-target=''>
                drinks
              </button>
              <button type='button' className='menu-tab-item' data-target=''>
                desserts
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
