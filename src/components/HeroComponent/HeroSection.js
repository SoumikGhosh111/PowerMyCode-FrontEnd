import React, {useEffect, useRef, useState, useMemo} from 'react'; 
import {Application} from "@splinetool/runtime"; 
import "./HeroSection.css"; 


function HeroSection() {
  const canvasRef = useRef(null) ;
  const [scroll, setScroll] = useState(0);  
  const [showCanvas, setShowCnvas] = useState(false); 


  useEffect(() => { 
    const canvas = canvasRef.current; 
    if(!canvas) return; 
    const app = new Application(canvas); 
    app.load('https://prod.spline.design/TxxhcqLWtf8ULg0b/scene.splinecode');
  } , []); 

  useEffect(() => { 
    const handleScroll = () => { 
      setScroll(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll); 
    return ( ) => { 
      window.removeEventListener("scroll", handleScroll); 
    }
  }, []); 

  useEffect(() => { 
   const timer = setTimeout(() => { 
        setShowCnvas(true); 
    } ,1000); 
    return () => clearTimeout(timer) ; 
    
  }, [])

  const fontSize = useMemo (() => Math.max(130, 150 - scroll / 15), [scroll]);  
  console.log(showCanvas); 
  return (
    <div className='hero-section'>
        <canvas ref={canvasRef} id='canvas3d' />
        <h1 style={{fontSize: `${fontSize}px`}}>PowerMyCode</h1>


        <div className='gradient-blur-background-blue'></div>
        <div className='gradient-blur-background-orange-purple'></div>
        <div className='gradient-blur-background-whiteish'></div>

    </div>
  )
}

export default HeroSection;