import React from 'react';
import HeroSection from '../components/HeroComponent/HeroSection';
import AboutUs from '../components/AboutUs/AboutUs';
import TeamMembers from '../components/TeamMembers/TeamMembers';
import NavBar from '../components/NavBar/NavBar';
import Services from '../components/Services/Services';
import ContactInfo from '../components/Contact/ContactInfo';
function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Services />
      <TeamMembers />
      <ContactInfo />
    </>
  )
}

export default HomePage