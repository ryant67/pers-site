import '../Style/login.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoremIpsum, { loremIpsum } from 'react-lorem-ipsum';

export default function LoginDis() {

  const [users, setUsers] = useState(null);
  const [status, setStatus] = useState(false);

  const statusChange = (e) => {
    if (status === true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  useEffect(() => {
    fetch('api/users')
      .then(res => res.json())
      .then(json => setUsers(json.users))
      .then(console.log(users))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>

      <div id='login_view'>
        <div id='login_directions'>
          <div>Hello & Welcome!</div>
        </div>
        <form>

          <input
            type='text'
            className='login_field'
            placeholder='Username'
            required={true} />

          <input
            type='password'
            className='login_field'
            placeholder='Password'
            required={true} />

          <button id='login_bttn' type='submit'>
              Login
          </button>

          <div id='reg_redirect'>
            Don't have an account?
            <div>
              <a href='/register'>
                Register Here
              </a>
            </div>
          </div>

          <div id='pass_change'>
            Forgot your password?
            <div>
              <button type='button' onClick={statusChange}>
                Change Status
              </button>
            </div>
          </div>

        </form>
      </div>

      { status === true
        ?
        <div id='password_view'>
          <div id='password_directions'>
            Reset your Password!
          </div>
          <form>

            <input
              type='text'
              className='password_field'
              placeholder='Username'
              required={true} />

            <input
              type='text'
              className='password_field'
              placeholder='Email'
              required={true} />
            
            <input
              type='password'
              className='password_field'
              placeholder='New Password'
              required={true} />
            
            <input
              type='password'
              className='password_field'
              placeholder='Confirm New Password'
              required={true} />
            
            <button id='passReset_btn'
              type='submit'>
                Confirm
            </button>

            <button id='passCancel_btn'
              type='cancel'
              onClick={e => setStatus(false)}>
                Cancel
            </button>
            
          </form>
        </div>
        :
        <div id='loginInfo_view'>
          <div id='loginInfo_text'>
            <LoremIpsum p={2} />
          </div>
        </div>
      }

    </div>
  )
}
