import React, { useEffect, useState } from "react";
import { Link as LinkS } from "react-scroll";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  const [active, setActive] = useState(false);
  const [scrollNav, setScrollnav] = useState(false);

  const activeC = (e) => setActive(true);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <nav
        scrollNav={scrollNav}
        className='nav'
        style={{ background: scrollNav ? "#191f3a" : "transparent" }}
      >
        <div className='navbar-container'>
          <LinkS
            smooth={true}
            duration={800}
            spy={true}
            exact='true'
            offset={-80}
            to='home'
            className='nav-logo'
          >
            Cravers
          </LinkS>
          <div className='mobile-icon' onClick={toggle}>
            <FaBars />
          </div>
          <ul className='nav-menu'>
            <li
              className={active ? "active nav-item" : "nav-item"}
              onClick={activeC}
            >
              <LinkS
                className='nav-links'
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                About
              </LinkS>
            </li>
            <li
              className={active ? "active nav-item" : "nav-item"}
              onClick={activeC}
            >
              <LinkS
                className='nav-links'
                to='menu'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Menu
              </LinkS>
            </li>
            <li
              className={active ? "active nav-item" : "nav-item"}
              onClick={activeC}
            >
              <LinkS
                className='nav-links'
                to='reviews'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Reviews
              </LinkS>
            </li>
            {/* <li
              className={active ? "active nav-item" : "nav-item"}
              onClick={activeC}
            >
              <LinkS
                className='nav-links'
                to='team'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Team
              </LinkS>
            </li> */}
          </ul>
          <div className='nav-btn'>
            <a className='nav-btn-link' href='tel:+917972872410'>
              Contact Me
            </a>
            <a className='nav-btn-link E' href='mailto:yashsabal716@gmail.com'>
              E-mail
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
