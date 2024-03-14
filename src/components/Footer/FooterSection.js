import React, {useEffect} from 'react'
import "./Footer.css"; 
import powerMyCodeLogo from "../../assets/PowerMyCodeLogo.svg"; 
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function FooterSection() {

  
  return (
    <div className='footer-section-wrapper'>
      <div className='footer-section'>
        <div className='footer-header'>
          <img src={powerMyCodeLogo}/>
          <div className='contact-number'>
            <div className='ph-logo'><LocalPhoneRoundedIcon /></div>
            <div className='contact-number-number'>
              Call Any time 
              <a href='tel:+91-99080-78538'>+91-99080-78538</a>
            </div>
          </div>
        </div>
      <div className='hor-line'></div>
      <div className='footer-body'>
        <div className='footer-body-items'>
          <div className='footer-body-items-1'>
            <div className='footer-body-items-1-logo'>
              <LocationOnIcon />
              <h2>Address</h2>
            </div>
            <a href="https://goo.gl/maps/7vCwTVMfvJzLSmZUA">2nd Cross Road, Rajiv Gandhi Nagar Sector-7, HSR Layout Bangalore-560102</a>
          </div>

          <div className='footer-body-items-1'>
            <div className='footer-body-items-1-logo'>
            <TelegramIcon/>
            <h2>Say Hello</h2>
            </div>
            <a href="powermycode@gmail.com">powermycode@gmail.com</a>
          </div>

          <div className='footer-body-items-1'>
            <span >See Our new Update</span>
            <div className='new-updates'>
            <input placeholder='Email here. . .'/>
            <button><ArrowOutwardIcon /></button>
            </div>
          </div>
        </div>
        <div className='footer-body-items'>
          <h2>Our Solutions</h2>
          <a href='#services'>Web Developement</a>
          <a href='#services'>Mobile Developement</a>
          <a href='#services'>App Developement</a>
          <a href='#services'>Consulting Services</a>
          <a href='#services'>E-Commerce Solutions</a>
          <a href='#services'>UI/UX Design</a>
          <a href='#services'>Software developement</a>
        </div>
        <div className='footer-body-items'>
          
        </div>
        <div className='footer-body-items'>
          
        </div>
      </div>

      </div>
    </div>
  )
}

export default FooterSection; 