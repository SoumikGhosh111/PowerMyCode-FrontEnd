import React from 'react';
import "./Marquee.css"


function MarqueeRightToLeft({ text }) {

    return (
       <div className='texts-right-left'>
        <div className='texts-slide-right-left'>
            <span className='texts-slide-items-right-left' >{text}</span>
            <span className='texts-slide-items-right-left' >{text}</span>
            <span className='texts-slide-items-right-left' >{text}</span>
            <span className='texts-slide-items-right-left' >{text}</span>
        </div>
        <div className='texts-slide-right-left'>
            <span className='texts-slide-items-right-left' >{text}</span>
            <span className='texts-slide-items-right-left' >{text}</span>
            <span className='texts-slide-items-right-left' >{text}</span>
            <span className='texts-slide-items-right-left' >{text}</span>
        </div>

        
       </div>
    )
}

export default MarqueeRightToLeft; 