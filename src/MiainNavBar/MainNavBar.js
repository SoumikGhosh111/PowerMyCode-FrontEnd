import React, {useState, useEffect} from 'react'; 
import "./MainNavBar.css"; 
import { gsap } from 'gsap';
import powerMyCodeLogoImg from "../assets/PowerMyCodeLogo.svg"; 

function MainNavBar() {
    const [tl, setTl] = useState(null);

 useEffect(() => {
    // Initialize the timeline
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
    setTl(timeline);

    // Function to handle the open click
    const handleOpenClick = () => {
      if (timeline.reversed()) {
        timeline.play();
      } else {
        timeline.to('nav', { right: 0 })
          .to('nav', { height: '100vh' }, '-=.1')
          .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
          .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
          .to('nav img', { opacity: 1 }, '-=1');
      }
    };

    // Function to handle the close click
    const handleCloseClick = () => {
      timeline.reverse();
    };

    // Add event listeners
    const openButton = document.querySelector('.main-nav-bar');
    const closeButton = document.querySelector('.close');

    openButton.addEventListener('click', handleOpenClick);
    closeButton.addEventListener('click', handleCloseClick);

    // Cleanup function to remove event listeners
    return () => {
      openButton.removeEventListener('click', handleOpenClick);
      closeButton.removeEventListener('click', handleCloseClick);
    };
 }, []);

  return (
    <div className='main-nav-bar-wrapper'>
        <div className='main-nav-bar'>
            Explore Our Website
        </div>

        <nav>
		{/* <h2 data-cursor-text= "PowerMyCode"></h2> */}
    <img  src={powerMyCodeLogoImg}/>
    
		<div class="close">
			<div></div>
		</div>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/blogs">Blogs</a></li>
		</ul>
	</nav>
    </div>
  )
}

export default MainNavBar