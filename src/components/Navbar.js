import React, { useState } from 'react';
import './Navbar.css';
import * as Scroll from 'react-scroll';
let Link = Scroll.Link;



function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link  
          
          activeClass="active" to="top" spy={true} smooth={true} duration={500} offset={-80}
          
          className='navbar-logo' onClick={closeMobileMenu}>
          KA
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} offset={-80} className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                

                activeClass="active" to="about" spy={true} smooth={true} offset={80} duration={500}

                className='nav-links'
                onClick={closeMobileMenu}

              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
              activeClass="active" to="project" spy={true} smooth={true} offset={40} duration={500}

                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                activeClass="active" to="contact" spy={true} smooth={true} offset={80} duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>


          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
