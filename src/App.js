import React, {useEffect, useState} from "react"; 
// import { motion } from "framer-motion";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "./App.css"; 
import FooterSection from "./components/Footer/FooterSection";
// import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BloggingPage from "./pages/BloggingPage";
import MainNavBar from "./MiainNavBar/MainNavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

function App() {
  // const [pointer, setPointer] = useState({x: 0, y: 0}); 
    // useEffect (() => { 
    //     const handleMouseMovementEvent = ( e ) => { 
    //         setPointer({x: e.clientX, y:e.clientY});
    //     }


    //     document.addEventListener("mousemove", (e) => { 
    //         handleMouseMovementEvent(e); 
    //         document.querySelector(".mouse-movement-pointer").classList.remove("d-none"); 
    //     }); 
    //     return () => { 
    //         document.removeEventListener("mousemove", handleMouseMovementEvent);
    //     }
    // }, [])

    // useEffect(() => { 
    //   const handleMouseScroll = ( ) => { 
    //     const scrollDifference = window.scrollY - pointer.y;
    //     setPointer((prevPointer) => ({ 
    //       ...prevPointer, 
    //       y: prevPointer.y + scrollDifference
    //     }))
    //   }; 

    //   window.addEventListener("scroll", handleMouseScroll); 
    //   return ( ) => { 
    //     window.removeEventListener("scroll", handleMouseScroll); 
    //   }
    // }, [])

    useEffect(() => { 
      MouseFollower.registerGSAP(gsap);

      const cursor = new MouseFollower({ 
        container: document.querySelector(".App-body"),
        speed: 0.3,
        className: 'mf-cursor',
      }); 
      
    } , [])
  
  return (
    <div className="App-body">
      <MainNavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage /> }/>
          <Route path="/projects" element={<ProjectsPage /> }/>
          <Route path="/blogs" element={<BloggingPage /> }/>
        </Routes>
      </Router>
      
      <FooterSection /> 
    </div>
  );
}

export default App;
