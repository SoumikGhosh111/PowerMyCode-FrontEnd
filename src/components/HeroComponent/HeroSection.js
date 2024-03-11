import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Application } from "@splinetool/runtime";
import "./HeroSection.css";


function HeroSection() {
  const canvasRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const [showCanvas, setShowCnvas] = useState(false);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/TxxhcqLWtf8ULg0b/scene.splinecode');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCnvas(true);
    }, 1000);
    return () => clearTimeout(timer);

  }, [])

  const fontSize = useMemo(() => Math.max(67, 100 - scroll / 15), [scroll]);
  const pTextSize = useMemo(() => Math.max(14, 20 - scroll / 10), [scroll]);
  console.log(showCanvas);
  return (
    <div className='hero-section' id='hero-section'>
      {/* <canvas ref={canvasRef} id='canvas3d' /> */}
      <h1 style={{ fontSize: `${fontSize}px` }}>
        WELCOME TO POWERMYCODE</h1>
      <p style={{ fontSize: `${pTextSize}px` }}>We're a cutting-edge software development startup here to empower your digital vision. Whether you're a startup or an established business, we're your ultimate development partner. Let's revolutionize software together!</p>


      <div className='gradient-blur-background-blue'></div>
      <div className='gradient-blur-background-orange-purple'></div>
      <div className='gradient-blur-background-whiteish'></div>

    </div>
  )
}

export default HeroSection;