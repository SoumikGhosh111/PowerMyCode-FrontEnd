import React from 'react'; 
import "./Services.css"; 
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

function Services() {
  return (
    <div className='services-section-wrapper'>
        <div className='services-section-container-1'>
            <div className='services-section-text-info'>
                <h1>Our Services</h1>
                <span>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.</span>
            </div>
            <div className='left-right-carousil-button'>
                <button> <WestRoundedIcon /></button>
                <button> <EastRoundedIcon /></button>
            </div>
        </div>
        <div className='services-section-carousil-container-2'>
            <div className='carousil-items'> {/*Cards foe carousil*/}
                
            </div>
        </div>
    </div>
  )
}

export default Services