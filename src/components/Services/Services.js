import React, {useEffect, useState} from 'react'; 
import "./Services.css"; 
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import InfiniteCarousil from '../../common-components/Carousil/InfiniteCarousil';
import MarqueeImages from '../../common-components/MarqueeComp/MarqueeImages';
import { motion } from 'framer-motion';

function Services() {
    const [btn, setBtn]  = useState(null); 
    useEffect(() => { 
        setBtn(document.querySelectorAll(".button")); 
    }, [ ]); 
    console.log(btn); 
  return (
    <div className='services-section-wrapper' id='services'>
        <div className='services-section-container-1'>
            <div className='services-section-text-info'>
                <h1>Our Services</h1>
                <span>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.</span>
            </div>
        </div>
        <div className='services-section-carousil-container-2'>
            <InfiniteCarousil btn = {btn}/>
        </div>
        <div className='services-section-our-partner-container-3'>
            <MarqueeImages />
        </div>
    </div>
  )
}

export default Services