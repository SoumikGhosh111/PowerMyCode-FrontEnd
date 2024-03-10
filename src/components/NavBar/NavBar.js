import React from 'react'; 
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav-bar-wrapper'>
      <div className='nav-bar'>
        <ul>
          <li>
            <a href='#hero-section'>Home</a>
            <div className='expand-class'></div>
          </li>
          <li>
            Projects
            <div className='expand-class'></div>
          </li>
          <li>
            <a href='#about-us'>About Us</a>
            <div className='expand-class'></div>
          </li>
          <li>
            Contact Us
            <div className='expand-class'></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar; 