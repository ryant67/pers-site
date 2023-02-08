import React from 'react'
import { Link } from 'react-router-dom';
import LoginDis from './LoginDis';
import RegisterDis from './RegisterDis';

export default function LandingDis() {

    return (
      <div id='home_view'>
            <div id='welcome_header'>
                Welcome to my Personal Portfolio Website
            </div>
            <div id='welcome_message'>
                Here you will see some of my personal projects and a little information about me.
            </div>

            <button id='login_btn'>
                <Link to={'/login'}>Login</Link>
            </button>
            <button id='register_btn'>
                <Link to={'/register'}>Register</Link>
            </button>
      </div>
      
  )
}
