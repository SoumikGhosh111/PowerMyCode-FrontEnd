import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Application } from "@splinetool/runtime";
import "./HeroSection.css";
import powerMycodeLogo from "../../assets/PowerMyCodeLogo.svg"


function HeroSection() {
  const canvasRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const [showCanvas, setShowCnvas] = useState(false);
  const [number, setNumber] = useState(0)


  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const app = new Application(canvas);
  //   app.load('https://prod.spline.design/TxxhcqLWtf8ULg0b/scene.splinecode');
  // }, []);

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
  useEffect(() => { 
    const width = document.querySelector(".blank-hero").offsetWidth; 
    const numberOfDiv = Math.floor(width / 30); // Corrected variable name for clarity
    setNumber(numberOfDiv);
  } , []) 

  console.log(number)
  // const fontSize = useMemo(() => Math.max(67, 100 - scroll / 15), [scroll]);
  // const pTextSize = useMemo(() => Math.max(14, 20 - scroll / 10), [scroll]);
  console.log(showCanvas);
  return (
    <div className='hero-section' id='hero-section'>
      {/* <canvas ref={canvasRef} id='canvas3d' /> */}

      <div className='text-hero'>
        <img src={powerMycodeLogo} />
        <p >We're a cutting-edge software development startup here to empower your digital vision. Whether you're a startup or an established business, we're your ultimate development partner. Let's revolutionize software together!</p>
      </div>
      <div className='blank-hero'>
        {/* <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        <div className='blur-bgs'></div>
        
      <div className='green-blob'></div> */}
      {/* <canvas ref={canvasRef} id='canvas3d' />  */}
      </div>

      <div className='gradient-blur-background-blue'></div>
      <div className='gradient-blur-background-orange-purple'></div>
      <div className='gradient-blur-background-whiteish'></div> 

    </div>
  )
}

export default HeroSection;