import '../Style/footer.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

  return (
    <div>
      <div id='footer_view'>
        <ul>
          <li> | </li>
          <li>
            <a target='_blank'
              href='https://www.linkedin.com/in/ryantharris/'>
              LinkedIn
            </a>
          </li>
          <li> | </li>
          <li>
            <a target='_blank'
              href='https://github.com/ryant67'>
              GitHub
            </a>
          </li>
          <li> | </li>
          <li>
            <a target='_blank'
              href='https://alumni.codeup.com/students/1657'>
              Alumni Portal
            </a>
          </li>
          <li> | </li>
          <li>
            <a href='/about'>
              About Me
            </a>
          </li>
          <li> | </li>
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
