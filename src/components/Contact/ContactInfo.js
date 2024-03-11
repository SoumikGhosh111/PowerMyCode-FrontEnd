import React from 'react';
import "./ContactInfo.css";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function ContactInfo() {
  return (
    <div className='contact-section-wrapper'>
      <div className='conatac-section-address'>
        <div className='contact-section-texts-titles'>
          <h3>CONTACT WITH US</h3>
          <h1>LETS WORK TOGETHER?</h1>
          <span>I have worls-class, flexible support via live chat, email and hone. I guarantee that you’ll be able to have any issue resolved within 24 hours.</span>
        </div>
        <div className='contact-section-address-items'>
          <div className='logo-icn'><LocationOnIcon /></div>
          <div className='address-text'>2nd Cross Road, Rajiv Gandhi Nagar Sector-7, HSR Layout Bangalore-560102</div>
        </div>

        <div className='contact-section-address-items'>
          <div className='logo-icn'><LocalPhoneRoundedIcon /></div>
          <div className='address-text'><a href='tel:+91 99080 78538'>+91 99080 78538</a></div>
        </div>

        <div className='contact-section-address-items'>
          <div className='logo-icn'> <EmailRoundedIcon /></div>
          <div className='address-text'><a href='mailto:powermycode@gmail.com'>powermycode@gmail.com</a></div>
        </div>
        <div className='contact-section-social-links'>
          <h3 >Follow Us</h3>
          <span > Follow us on social networks</span>
          <div className='social-media-liks'>
            <div className='social-media-links-item'>
              <a href='www.facebook.com'><FacebookIcon sx={{ "&:hover": { transform: "scale(2)" }, transition: "all 0.2s ease-in-out", transform: "scale(1.5)" }} /></a>
            </div>

            <div className='social-media-links-item'>
              <a href='www.instagram.com'> <InstagramIcon sx={{ "&:hover": { transform: "scale(1.7)" }, transition: "all 0.2s ease-in-out", transform: "scale(1.3)" }} /></a>
            </div>

            <div className='social-media-links-item'>
              <a href='www.x.com'> <XIcon sx={{ "&:hover": { transform: "scale(1.7)" }, transition: "all 0.2s ease-in-out", transform: "scale(1.3)" }} /></a>
            </div>

            <div className='social-media-links-item'>
              <a href='www.linkedin.com'> <LinkedInIcon sx={{ "&:hover": { transform: "scale(1.7)" }, transition: "all 0.2s ease-in-out", transform: "scale(1.3)" }} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-with-us-form'>
        <form >
          <div className='name'>
            <div className='first-name'>
              <label htmlFor='first-name'>First Name</label>
              <input name='first-name' />
            </div>
            <div className='last-name'>
              <label htmlFor='last-name'>Last Name</label>
              <input name='last-name' />
            </div>
          </div>
          <label htmlFor='organization'>Company/Organization</label>
          <input name='organization' />

          <label htmlFor='email'>Email</label>
          <input name='email' />

          <label htmlFor='ph-no'>Phone</label>
          <input name='ph-no' />

          <label htmlFor='message'>Message</label>
          <textarea name='message' />

          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactInfo