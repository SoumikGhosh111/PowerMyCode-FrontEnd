import React from 'react'; 
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav-bar-wrapper'>
      <div className='nav-bar'>
        <ul>
          <li>
            Home
            <div className='expand-class'></div>
          </li>
          <li>
            Projects
            <div className='expand-class'></div>
          </li>
          <li>
            About Us
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