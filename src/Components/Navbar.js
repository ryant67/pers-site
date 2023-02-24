import '../Style/navbar.css';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Navbar() {

  const [dropStatus, setDropStatus] = useState(false);
  const [contactStatus, setContactStatus] = useState(false);

  const handleDropdown = (e) => {
    e.preventDefault()
    if (dropStatus === false) {
      setDropStatus(true)
    } else {
      setDropStatus(false)
    }
  }

  const handleContact = (e) => {
    e.preventDefault()
    if (contactStatus === false) {
      setContactStatus(true)
    } else {
      setContactStatus(false)
    }
  }

  return (
    <div>
      <div id='nav_view'>
        <div
          id='top'
          style={{height: '0', width: '0'}}></div>
        <div className='nav_title'>Ryan Harris</div>
        <ul id='nav_list'>
          <li className='nav_item'> | </li>
          <li className='nav_item'>
            <a onMouseEnter={(e) => {
              e.preventDefault()
              setDropStatus(true)
            }}>
              Projects
            </a>
          </li>
          <li className='nav_item'> | </li>
          <li className='nav_item'>
            <a href='/about'>
              About
            </a>
          </li>
          <li className='nav_item'> | </li>
          <li className='nav_item'>
            <button type='button'
            onClick={handleContact}>
              Contact
            </button>
          </li>
          <li className='nav_item'> | </li>
        </ul>
        <div className='nav_title'>Software Developer</div>
      </div>

      {dropStatus === true
        ?
        <div id='dropdown_view'
          onMouseLeave={handleDropdown}>
          <ul id='dropdown_list'>
            <li className='dropdown_item'>
              <a href='/calc'>
                Calculator
              </a>
            </li>
            <hr style={{
              width: '92%', margin: '0 auto', color: 'white'
            }} />
            <li className='dropdown_item'>
              <a>To Be Determined...</a>
            </li>
            <hr style={{
              width: '92%', margin: '0 auto', color: 'white'
            }} />
            <li className='dropdown_item'>
              <a>To Be Determined...</a>
            </li>
            <hr style={{
              width: '92%', margin: '0 auto', color: 'white'
            }} />
            <li className='dropdown_item'>
              <a>To Be Determined...</a>
            </li>
          </ul>
        </div>
        :
        <div></div>}
      
      {contactStatus === true
        ?
        <div>True Contact</div>
        :
        <div></div>}

    </div>
  )
}
