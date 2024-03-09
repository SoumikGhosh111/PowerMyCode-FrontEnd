import React from 'react'; 
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav-bar-wrapper'>
      <div className='nav-bar'>
        <ul>
          <li>
            Home
          </li>
          <li>
            Projects
          </li>
          <li>
            About Us
          </li>
          <li>
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar; 