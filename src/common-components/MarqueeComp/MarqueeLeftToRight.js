import React from 'react';
import "./Marquee.css"


function MarqueeLeftToRight({ text }) {

    return (
       <div className='texts-left-right'>
        <div className='texts-slide-left-right'>
            <span className='texts-slide-items-left-right' >{text}</span>
            <span className='texts-slide-items-left-right' >{text}</span>
            <span className='texts-slide-items-left-right' >{text}</span>
            <span className='texts-slide-items-left-right' >{text}</span>
        </div>
        <div className='texts-slide-left-right'>
            <span className='texts-slide-items-left-right' >{text}</span>
            <span className='texts-slide-items-left-right' >{text}</span>
            <span className='texts-slide-items-left-right' >{text}</span>
            <span className='texts-slide-items-left-right' >{text}</span>
        </div>

        
       </div>
    )
}

export default MarqueeLeftToRight; 