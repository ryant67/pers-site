import '../Style/login.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';

export default function LoginDis() {

  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [updateUser, setUpdateUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [status, setStatus] = useState(false);
  const [userName, setUserName] = useState('');
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInPassword, setLoggedInPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const statusChange = (e) => {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  const findUser = () => {
    const changeUser = users.find(u => u.userName === userName)
    const logUser = users.find(u => u.userName === loggedInUsername)
    setUpdateUser(changeUser)
    setLoggedInUser(logUser)
  }

  const userLogIn = async (e) => {
    e.preventDefault()
    try {
      if (loggedInUsername === loggedInUser.userName
      && loggedInPassword === loggedInUser.password) {
        navigate('/home')
      } else {
        alert('Incorrect Password')
        setLoggedInPassword('')
      }
    } catch (err) {
      console.log(err.message)
      if (err.message === `Cannot read properties of undefined (reading 'userName')`) {
        alert('Sorry but your information did not match a registered user.')
        setLoggedInUser(null)
        setLoggedInUsername('')
        setLoggedInPassword('')
      }
    } 
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
    try {
      if (email === updateUser.email
        && password === confPassword
        && updateUser.password !== password) {
        const response = await fetch(`/api/users/${updateUser.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ password }),
        })
        const json = await response.json()

        const usersCopy = [...users]
        const index = users.findIndex((u) => u.id === updateUser.id)
        usersCopy[index] = json.user

        setUsers(usersCopy)
        setUpdateUser(null)
        setUserName('')
        setEmail('')
        setPassword('')
        setConfPassword('')
        setStatus(false)
      } else {
        alert('Sorry but your information did not match a registered user or you are ' +
          'trying to update your password to your currently used password.')
        setUpdateUser(null)
        setUserName('')
        setEmail('')
        setPassword('')
        setConfPassword('')
      }
    } catch (err) {
      console.log(err.message)
      if (err.message === `Cannot read properties of undefined (reading 'email')`) {
        alert('Sorry but your information did not match a registered user.')
        setUpdateUser(null)
        setUserName('')
        setEmail('')
        setPassword('')
        setConfPassword('')
      }
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
        <form id='login_form' onSubmit={userLogIn}>

          <input
            type='text'
            className='login_field'
            placeholder='Username'
            value={loggedInUsername}
            required={true}
            onChange={e => setLoggedInUsername(e.target.value)}
            onBlur={findUser} />

          <input
            type='password'
            className='login_field'
            placeholder='Password'
            value={loggedInPassword}
            onChange={e => setLoggedInPassword(e.target.value)}
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
                Reset It Here
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
