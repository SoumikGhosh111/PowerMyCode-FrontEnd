import React, { useRef } from 'react';
import "./AboutUs.css"
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import MarqueeRightToLeft from '../../common-components/MarqueeComp/MarqueeRightToLeft';

function AboutUs() {
  const refIS = useRef(null);
  const isInView = useInView(refIS)

  return (
    <motion.div className='about-us-section-wrapper' id='about-us'>
      <MarqueeRightToLeft text={"Values and Culture"} />
      <motion.div className='about-us-information'
        ref={refIS}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h1 >Who Are We</h1>
        <span className='about-us-information-text'

        >At Powermycode, we are more than just a software development company we are <br /> your strategic partners in the world of innovation. Our dedicated team is committed<br /> to empowering your digital vision and delivering exceptional software solutions. <br /> With a passion for technology and a drive for excellence, we work tirelessly <br /> to ensure your success.</span>

        <h2>Our Approach</h2>
        <div className='four-pillars'>
          <div className='pillers'>
            <span className='piller'>
              <div className='green-dot-piller'></div>
              Creative Strategy
            </span>
            <span className='piller'>
              <div className='green-dot-piller'></div>
              Rebranding Design
            </span>
          </div>
          <div className='pillers'>
            <span className='piller'>
              <div className='green-dot-piller'></div>
              Unique Production
            </span>
            <span className='piller'>
              <div className='green-dot-piller'></div>
              Corporate Identity
            </span>
          </div>
          <span className='about-us-information-text'>We believe in the transformative power of technology and are dedicated to <br /> delivering efficient, reliable, and cutting-edge software solutions that exceed your <br /> expectations. With a focus on innovation, quality, and scalability, we are your  <br />partners in shaping the future of software development.</span>
        </div>
        <div className='about-us-section-container'>
          <h1 >What do we do</h1>
          <span>Empowering Excellence, Research-driven, <br /> Industry-focused, Quality-assured Solutions</span>
          <div className='about-us-section-container-topics'>
            <div className='about-us-section-container-topics-items'>
              <h1>01</h1>
              <h2>Research & Discovery</h2>
              <span>We initiate projects with thorough research, ensuring a deep understanding of your needs. Our approach is rooted in industry insights, driving tailored solutions.</span>
            </div>

            <div className='about-us-section-container-topics-items'>
              <h1>02</h1>
              <h2>Industry Expertise</h2>
              <span>Our extensive industry experience across healthcare, finance, e-commerce, and more enables us to craft specialized solutions, addressing sector-specific challenges and delivering exceptional results.</span>
            </div>


            <div className='about-us-section-container-topics-items'>
              <h1>03</h1>
              <h2>Quality Assurance</h2>
              <span>Quality is fundamental. Our rigorous quality processes, from code reviews to testing, ensure the delivery of high-performance, reliable software that exceeds industry standards.
              </span>
            </div>
          </div>
        </div>

      </motion.div>
      <div className='about-us-bg-1'></div>
      <div className='about-us-bg-2'></div>
    </motion.div>
  )

}

export default AboutUs; 