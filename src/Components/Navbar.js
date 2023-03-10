import '../Style/navbar.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logout from '../Images/logout.png';

export default function Navbar() {

  const navigate = useNavigate();
  const [dropStatus, setDropStatus] = useState(false);
  const [contactStatus, setContactStatus] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.clear()
    navigate('/login')
  }

  const handleHome = (e) => {
    e.preventDefault();
    if (URL !== 'http://localhost:3000/home') {
      navigate('/home')
    }
  }

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
          style={{
            height: '0',
            width: '0',
            position: 'absolute',
            top: '0',
            left: '0',
          }}>
          </div>
        <div className='nav_title'>
          <span
            style={{cursor: 'pointer'}}
            onClick={handleHome}>
            Ryan Harris
          </span>
        </div>
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
        <div id='logout_icon'>
          <img
            src={logout}
            onClick={handleLogout} />
        </div>
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
              <a href='/tbd'>To Be Determined...</a>
            </li>
            <hr style={{
              width: '92%', margin: '0 auto', color: 'white'
            }} />
            <li className='dropdown_item'>
              <a href='/tbd'>To Be Determined...</a>
            </li>
            <hr style={{
              width: '92%', margin: '0 auto', color: 'white'
            }} />
            <li className='dropdown_item'>
              <a href='/tbd'>To Be Determined...</a>
            </li>
          </ul>
        </div>
        :
        <div></div>}
      
      {contactStatus === true
        ?
        <div>
          <div className='whole_view'></div>
          <div id='contact_view'>
            <div id='contact_header'>
              Contact Information
            </div>
            <hr style={{
              width: '90%',
              color: 'black',
            }} />
            <div className='contact_message'>
              Phone Number: (817)300-0711
            </div>
            <div className='contact_message'>
              Email: ryan.t.harris67@gmail.com
            </div>
            <div id='contact_iconList'>
              <div className='contact_icon'>
                <a target='_blank' href='https://www.linkedin.com/in/ryantharris/'>
                  <i className="fa-brands fa-xl fa-linkedin"></i>
                </a>
              </div>
              <div className='contact_icon'>
                <a target='_blank' href='https://github.com/ryant67'>
                  <i className="fa-brands fa-xl fa-github"></i>
                </a>
              </div>
              <div className='contact_icon'>
                <a target='_blank' href='https://alumni.codeup.com/students/1657'>
                  <i className="fa-solid fa-xl fa-person-rays"></i>
                </a>
              </div>
            </div>
            <button type='button' id='contact_btn'
              onClick={handleContact}>
              Close
            </button>  
          </div>
        </div>
        :
        <div></div>}

    </div>
  )
}
