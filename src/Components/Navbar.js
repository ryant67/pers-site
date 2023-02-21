import '../Style/navbar.css';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Navbar() {

  const [dropStatus, setDropStatus] = useState(false);

  const handleDropdown = (e) => {
    e.preventDefault()
    if (dropStatus === false) {
      setDropStatus(true)
    } else {
      setDropStatus(false)
    }
  }

  return (
    <div>
      <div id='nav_view'>
        <div
          id='top'
          style={{height: '0', width: '0'}}></div>
        <div id='nav_dropdown'>
          <ul>
            <li>Ryan Harris</li>
            <li></li>
            <li></li>
            <li></li>
            <li>Software Developer</li>
          </ul>
        </div>






        {/* <div id='nav_dropdown'>
          <button
            type='button'
            onClick={handleDropdown}>
            Project Selection
          </button>
          {dropStatus === true
            ?
            <div>
              <ul>
                
              </ul>
            </div>
            :
            <div></div>}
        </div> */}
        
      </div>
    </div>
  )
}
