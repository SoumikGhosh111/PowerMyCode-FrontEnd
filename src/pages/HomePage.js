import React from 'react'; 
import HeroSection from '../components/HeroComponent/HeroSection';
import AboutUs from '../components/AboutUs/AboutUs';
import TeamMembers from '../components/TeamMembers/TeamMembers';

function HomePage() {
  return (
    <>
        <HeroSection />
        <AboutUs /> 
        <TeamMembers />
    </>
  )
}

export default HomePage