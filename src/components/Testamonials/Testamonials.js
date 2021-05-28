import React from "react";
import "../HeroSection/HeroSection.css";
import "../About us/About.css";
import "./Testimonials.css";
function Testamonials() {
  return (
    <>
      <section
        className='testimonials-section min-vh-100 sec-padding'
        id='reviews'
      >
        <div className='container'>
          <div className='section-title'>
            <h2 data-title='testimonials'>Some Feedbacks</h2>
          </div>
        </div>
        <div className='row'>
          <div className='testi-item'>
            <div className='testi-author'>
              <div className='testi-author-name'>
                <h3>raj champal</h3>
                <span>food specialists</span>
              </div>
              <div className='testi-author-img'>
                <img
                  src='https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png'
                  alt=''
                />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              harum suscipit, tenetur blanditiis iusto id et quos eius eligendi
              ipsa incidunt, in vel!
            </p>
            <div className='testi-ratings'>⭐⭐⭐⭐⭐</div>
          </div>
          <div className='testi-item'>
            <div className='testi-author'>
              <div className='testi-author-name'>
                <h3>raj champal</h3>
                <span>food specialists</span>
              </div>
              <div className='testi-author-img'>
                <img
                  src='https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png'
                  alt=''
                />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              harum suscipit, tenetur blanditiis iusto id et quos eius eligendi
              ipsa incidunt, in vel!
            </p>
            <div className='testi-ratings'>⭐⭐⭐⭐⭐</div>
          </div>
          <div className='testi-item'>
            <div className='testi-author'>
              <div className='testi-author-name'>
                <h3>raj champal</h3>
                <span>food specialists</span>
              </div>
              <div className='testi-author-img'>
                <img
                  src='https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png'
                  alt=''
                />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              harum suscipit, tenetur blanditiis iusto id et quos eius eligendi
              ipsa incidunt, in vel!
            </p>
            <div className='testi-ratings'>⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testamonials;
