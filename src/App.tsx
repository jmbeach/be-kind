import React, { useEffect, useRef, useState } from 'react';
import { BeKind } from './BeKind';
const hsl = require('hsl-to-hex')

function App() {
  const hue1 = 0
  const increment = 35
  const color1SL = [80, 45]
  const [frame, setFrame] = useState(0);
  const timer = useRef<unknown>();
  const adjustColor = (color: number, amount: number) => {
    let result = color + amount;
    return result % 360;
  }

  useEffect(() => {
    if (timer.current) return;
    timer.current = (setInterval(() => {
      setFrame(frame => adjustColor(frame, 1))
    }, 16))
  }, [timer])
  

  const hue2 = adjustColor(hue1, increment)
  const hue3 = adjustColor(hue1, increment * 2)
  const hue4 = adjustColor(hue1, increment * 3)
  const hue5 = adjustColor(hue1, increment * 4)
  const color1 = hsl(adjustColor(hue1, frame), color1SL[0], color1SL[1]);
  const color2 = hsl(adjustColor(hue2, frame), color1SL[0], color1SL[1]);
  const color3 = hsl(adjustColor(hue3, frame), color1SL[0], color1SL[1]);
  const color4 = hsl(adjustColor(hue4, frame), color1SL[0], color1SL[1]);
  const color5 = hsl(adjustColor(hue5, frame), color1SL[0], color1SL[1]);

  return (
    <div className='bg-black'>
      <BeKind size={10} color1={color1} color2={color2} color3={color3} color4={color4} color5={color5}></BeKind>
    </div>
  );
}

export default App;
