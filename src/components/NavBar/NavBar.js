import React from 'react';
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav-bar-wrapper'>
      <div className='nav-bar'>
        <ul>
          <a href='#hero-section'>
            <li>
              Home
              <div className='expand-class'></div>
            </li>
          </a>
         <a href='#'>
         <li>
            Projects
            <div className='expand-class'></div>
          </li>
         </a>
          <a href='#about-us'>
            <li>
              About Us
              <div className='expand-class'></div>
            </li>
          </a>
          <a href='#'>
          <li>
            Contact Us
            <div className='expand-class'></div>
          </li>
          </a>
          
        </ul>
      </div>
    </div>
  )
}

export default NavBar; 