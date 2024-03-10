import React, {useEffect} from 'react'
import "./Footer.css"; 

function FooterSection() {

  
  return (
    <div className='footer-section-wrapper'>
      <div className='footer-section'>
        <div className='usefull-links'>
          <div className='usefull-links-items'>
            <a><h3>Free</h3></a>

          </div>
          <div className='usefull-links-items'>
            <a><h3>Learn</h3></a>
          </div>
          <div className='usefull-links-items'>
            <a><h3>Events</h3></a>
          </div>
          <div className='usefull-links-items'>
            <a href='#about-us'><h3>About</h3></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection; 