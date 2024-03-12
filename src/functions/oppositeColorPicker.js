import { useState } from 'react';

const oppositeColorPicker = (initialColor = '#00ff00') => {
 const [color, setColor] = useState(initialColor);

 const calculateOppositeColor = (hexColor) => {
    let r = parseInt(hexColor.slice(1, 3), 16),
        g = parseInt(hexColor.slice(3, 5), 16),
        b = parseInt(hexColor.slice(5, 7), 16);

    let oppositeR = (255 - r).toString(16),
        oppositeG = (255 - g).toString(16),
        oppositeB = (255 - b).toString(16);

    oppositeR = oppositeR.length === 1 ? '0' + oppositeR : oppositeR;
    oppositeG = oppositeG.length === 1 ? '0' + oppositeG : oppositeG;
    oppositeB = oppositeB.length === 1 ? '0' + oppositeB : oppositeB;

    return '#' + oppositeR + oppositeG + oppositeB;
 };

 return [color, setColor, calculateOppositeColor];
};

export default oppositeColorPicker;