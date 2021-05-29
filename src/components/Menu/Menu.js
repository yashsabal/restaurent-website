import React, { useEffect, useState } from "react";
import "../HeroSection/HeroSection.css";
import "../About us/About.css";
import "./Menu.css";
import Dishes from "../Filter/Dishes";

function Menu() {
  const [filter, SetFilter] = useState("lunch");
  const [active, setActive] = useState(false);

  const activeC = (e) => setActive(true);
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
            <ul className='menu-tabs'>
              <li
                className={active ? "active menu-tab-item" : "menu-tab-item"}
                onClick={() => SetFilter("lunch")}
              >
                lunch
              </li>
              <li
                className={active ? "active menu-tab-item" : "menu-tab-item"}
                onClick={() => SetFilter("dinner")}
              >
                dinner
              </li>
              <li
                className={active ? "active menu-tab-item" : "menu-tab-item"}
                onClick={() => SetFilter("drink")}
              >
                drinks
              </li>
              <li
                className={active ? "active menu-tab-item" : "menu-tab-item"}
                onClick={() => SetFilter("desserts")}
              >
                desserts
              </li>
            </ul>
          </div>
          <div className='row menu-tab-content' id='lunch'>
            <Dishes filter={filter} SetFilter={SetFilter} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
