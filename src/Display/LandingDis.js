import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/landing.css';

export default function LandingDis() {
    return (
        <div id='back_img'>
            <div id='landing_view'>
            
                <div id='welcome_header'>
                    Hello, my name is Ryan Harris. <br />
                    <hr style={{width: '85%'}}/>
                    Welcome to my Personal Portfolio Website!
                </div>
                <div id='welcome_message'>
                    Here we will see some of my personal projects and a little information about me. <br />
                    Thank you for visiting.
                </div>

                <div id='btn_group'>
                    <Link to={'/login'}>
                        <button id='login_btn'>
                            Login
                        </button>
                    </Link>
                    <Link to={'/register'}>
                        <button id='register_btn'>
                            Register
                        </button>
                    </Link>
                </div>

            </div>
        </div>
         
  )
}
