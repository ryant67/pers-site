import React from 'react';
import '../Style/error.css';
import { useState } from 'react';

export default function ErrorDis() {

  const [color, setColor] = useState('lightseagreen');

  const colorChange = (e) => {
    e.preventDefault();

    if (color === 'palevioletred') {
      setColor('lightgreen');
    } else if (color === 'lightgreen') {
      setColor('lightcoral');
    } else if (color === 'lightcoral') {
      setColor('lightseagreen');
    } else if (color === 'lightseagreen') {
      setColor('lightskyblue');
    } else if (color === 'lightskyblue') {
      setColor('palevioletred');
    }
  }

  return (
    <div
      style={{backgroundColor: color}}
      id='whole_error'>
      <div id='error_text'>
        <div id='four_header'>Error 404!</div>
        <div id='four_body'>
          Apologies, but you seem to have wandered to a place that does not exist!!
        </div>
        <div>
          <i
            onClick={colorChange}  
            style={{ margin: '30px 0 10px 0' }}
            id='exclamation'
            className="fa-solid fa-10x fa-circle-exclamation"></i>
        </div>
        pssst, click me...
      </div>
    </div>
  )
}
