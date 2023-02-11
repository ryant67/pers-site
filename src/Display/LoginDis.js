import '../Style/login.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';

export default function LoginDis() {

  const [users, setUsers] = useState(null);
  const [updateUser, setUpdateUser] = useState(null);
  const [status, setStatus] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const statusChange = (e) => {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  const findUser = () => {
    const user = users.find(u => u.userName === userName)
    setUpdateUser(user)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setStatus(false)
    setUserName('')
    setEmail('')
    setPassword('')
    setConfPassword('')
  }

  const updatePassword = async (e) => {
    e.preventDefault()
    if (email === updateUser.email
        && password === confPassword
        && updateUser.password !== password) {
      const response = await fetch(`/api/users/${updateUser.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ password }),
      })
      const json = await response.json()

      const usersCopy = [...users]
      const index = users.findIndex((u) => u.id === userId)
      usersCopy[index] = json.user

      setUsers(usersCopy)
      setUpdateUser(null)
      setUserName('')
      setEmail('')
      setPassword('')
      setConfPassword('')
      setStatus(false)
    } else {
      alert('Sorry but your information did not match a registered user.')
    }
  }

  useEffect(() => {
    fetch('api/users/')
      .then(res => res.json())
      .then(json => setUsers(json.users))
      .then(console.log(users))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>

      <div id='login_view'>
        <div id='login_directions'>
          <div id='login_header'>Welcome</div>
          <div id='login_message'>
            Please fill out the required fields.
          </div>
        </div>
        <form id='login_form'>

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

        </form>

        <div id='login_options'>
          <div id='reg_redirect'>
            Don't have an account?
            <div>
              <a href='/register'>
                Register
              </a>
            </div>
          </div>

          <div id='pass_change'>
              Forgot your password?
            <div>
              <button type='button' onClick={statusChange}>
                Reset Password
              </button>
            </div>
          </div>
        </div>

      </div>

      <div>
        { status === true
          ?
          <div id='password_view'>
            <div id='password_directions'>
              Reset your Password!
            </div>
            <form id='password_form' onSubmit={updatePassword}>

              <input
                type='text'
                className='password_field'
                placeholder='Username'
                value={userName}
                required={true}
                onChange={e => setUserName(e.target.value)}
                onBlur={findUser} />
                
              <input
                type='text'
                className='password_field'
                placeholder='Email'
                value={email}
                required={true}
                onChange={e => setEmail(e.target.value)} />
              
              <input
                type='password'
                className='password_field'
                placeholder='New Password'
                value={password}
                required={true}
                onChange={e => setPassword(e.target.value)} />
              
              <input
                type='password'
                className='password_field'
                placeholder='Confirm New Password'
                value={confPassword}
                required={true}
                onChange={e => setConfPassword(e.target.value)} />
              
              { password.length > 0 
                &&
                confPassword.length > 0
                &&
                password !== confPassword
                ?
                <div
                  style={{
                  width: '90%',
                  margin: 'auto',
                  textAlign: 'start',
                  fontSize: '12px'
                }}>
                  Passwords do not currently match.
                </div>
                :
                <div></div>
                }
              
              <button id='passReset_btn' type='submit'>
                  Confirm
              </button>

              <button id='passCancel_btn'
                type='button'
                onClick={handleCancel}>
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

    </div>
  )
}
