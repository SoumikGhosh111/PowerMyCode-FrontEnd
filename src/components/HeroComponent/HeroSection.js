import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Application } from "@splinetool/runtime";
import "./HeroSection.css";
import powerMycodeLogo from "../../assets/PowerMyCodeLogo.svg"


function HeroSection() {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const interBubbleRef = useRef(null);

  useEffect(() => {
    const move = () => {
      setCurX(prevX => prevX + (tgX - prevX) / 20);
      setCurY(prevY => prevY + (tgY - prevY) / 20);
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [tgX, tgY]);

  useEffect(() => {
    if (interBubbleRef.current) {
      interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }
  }, [curX, curY]);
  return (
    <div className='hero-section' id='hero-section'>
      {/* <canvas ref={canvasRef} id='canvas3d' /> */}
      <div class="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div class="gradients-container">
          <div class="g1"></div>
          <div class="g2"></div>
          <div class="g3"></div>
          <div class="g4"></div>
          <div class="g5"></div>
          <div class="interactive"></div>
        </div>
      </div>

      <div className='text-hero'>
        <img src={powerMycodeLogo} />
        <p >We're a cutting-edge software development startup here to empower your digital vision. Whether you're a startup or an established business, we're your ultimate development partner. Let's revolutionize software together!</p>
      </div>
      <div className='blank-hero'>

      </div>

      <div className='gradient-blur-background-blue'></div>
      <div className='gradient-blur-background-orange-purple'></div>
      <div className='gradient-blur-background-whiteish'></div>

    </div>
  )
}

export default HeroSection;