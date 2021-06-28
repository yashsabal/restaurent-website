import React from "react";
import "./Dishes.css";
import "../HeroSection/HeroSection.css";
import "../About us/About.css";
import "../Menu/Menu.css";
import Data from "../Filter/Data";

function Dishes({ filter }) {
  return (
    <>
      {Data.filter((val) => {
        return val.category === filter;
      }).map((val, key) => {
        return (
          <div className='menu-item' key={key}>
            <div className='menu-item-title'>
              <img src={val.image} />
              <h3>{val.title}</h3>
            </div>
            <div className='menu-item-price'>{val.price}</div>
          </div>
        );
      })}
    </>
  );
}

export default Dishes;
