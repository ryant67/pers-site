import '../Style/footer.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

  return (
    <div>
      <div id='footer_view'>
        <ul id='footer_list'>
          <li className='footer_item'> | </li>
          <li className='footer_item'>
            <a target='_blank'
              href='https://www.linkedin.com/in/ryantharris/'>
              LinkedIn
            </a>
          </li>
          <li className='footer_item'> | </li>
          <li className='footer_item'>
            <a target='_blank'
              href='https://github.com/ryant67'>
              GitHub
            </a>
          </li>
          <li className='footer_item'> | </li>
          <li className='footer_item'>
            <a target='_blank'
              href='https://alumni.codeup.com/students/1657'>
              Alumni Portal
            </a>
          </li>
          <li className='footer_item'> | </li>
          <li className='footer_item'>
            <a href='/about'>
              About Me
            </a>
          </li>
          <li className='footer_item'> | </li>
        </ul>
        <div id='top'>
          <a href='#top'>
            Back to Top
          </a>
        </div>
      </div>
    </div>
  )
}
