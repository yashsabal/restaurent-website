import React, { useEffect, useState } from "react";
import "../HeroSection/HeroSection.css";
import "../About us/About.css";
import "./Menu.css";
import Dishes from "../Filter/Dishes";
import Aos from "aos";
import "aos/dist/aos.css";

function Menu() {
  const [filter, SetFilter] = useState("lunch");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className='menu-section min-vh-100 sec-padding' id='menu'>
        <div className='container'>
          <div className='row'>
            <div className='section-title'>
              <h2 data-title='order now'>Our Menu & Place</h2>
            </div>
          </div>
          <div className='row'>
            <ul className='menu-tabs'>
              <li className='menu-tab-item' onClick={() => SetFilter("lunch")}>
                Menu
              </li>
              <li
                className='menu-tab-item'
                onClick={() => SetFilter("special")}
              >
                special
              </li>
              <li className='menu-tab-item' onClick={() => SetFilter("drink")}>
                drinks
              </li>
              {/* <li className='menu-tab-item' onClick={() => SetFilter("place")}>
                place
              </li> */}
            </ul>
          </div>
          <div className='row menu-tab-content' id='lunch' data-aos='flip-up'>
            <Dishes filter={filter} SetFilter={SetFilter} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
