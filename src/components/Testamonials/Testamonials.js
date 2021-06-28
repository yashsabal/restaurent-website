import React, { useEffect } from "react";
import "../HeroSection/HeroSection.css";
import "../About us/About.css";
import "./Testimonials.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Testamonials() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
          <div className='testi-item' data-aos='fade-right'>
            <div className='testi-author'>
              <div className='testi-author-name'>
                <h3>Akshay Darode</h3>
                <span>Local Guide</span>
              </div>
              <div className='testi-author-img'>
                <img
                  src='https://lh3.googleusercontent.com/a-/AOh14GjywBM04zWZ0MYUDODDJbqxnqdmIolMEz5bQ5i2OA=w60-h60-p-rp-mo-ba4-br100'
                  alt=''
                />
              </div>
            </div>
            <p>
              Nice Place for spending some quality time with friends and soul
              mates with one cup of coffee.... Rates are very economical and the
              quality also good. Place is not so big... but the setting
              arrangement is good... you can enjoy your coffee or tea with
              outside atmosphere... but private space are not available here.
            </p>
            <div className='testi-ratings'>⭐⭐⭐⭐⭐</div>
          </div>
          <div className='testi-item' data-aos='fade-right'>
            <div className='testi-author'>
              <div className='testi-author-name'>
                <h3>Vaibhav pradan</h3>
                <span>Local Guide</span>
              </div>
              <div className='testi-author-img'>
                <img
                  src='https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png'
                  alt=''
                />
              </div>
            </div>
            <p>
              The tea and coffee options are just awesome. The sandwiches are
              also good. The cold coffee I like the most. The chai villa is best
              option for chai lovers
            </p>
            <div className='testi-ratings'>⭐⭐⭐⭐</div>
          </div>
          <div className='testi-item' data-aos='fade-right'>
            <div className='testi-author'>
              <div className='testi-author-name'>
                <h3>MD Nyaz</h3>
                <span>Local Guide</span>
              </div>
              <div className='testi-author-img'>
                <img
                  src='https://lh3.googleusercontent.com/a-/AOh14GhL4lwYF5P3SWTKxa--vUr61BHvlSD19w6KKqjCvQ=w60-h60-p-rp-mo-ba4-br100'
                  alt=''
                />
              </div>
            </div>
            <p>
              Nice taste, prompt service and the price was great. everyone
              should try this place atleast one's if they are in nagpur.{" "}
            </p>
            <div className='testi-ratings'>⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testamonials;
