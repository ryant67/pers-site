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
  const [errorModal, setErrorModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successModal, setSuccessModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [userName, setUserName] = useState('');
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInPassword, setLoggedInPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const statusChange = () => {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  const errorChange = () => {
    if (errorModal === false) {
      setErrorModal(true);
    } else {
      setErrorModal(false);
    }
  }

  const successChange = () => {
    if (successModal === false) {
      setSuccessModal(true);
    } else {
      setSuccessModal(false);
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
        setErrorModal(true);
        setErrorMsg('It seems you\'ve entered an incorrect password!');
        setLoggedInPassword('');
      }
    } catch (err) {
      if (err) {
        setErrorModal(true);
        setErrorMsg('We apologize, but your information could not be verified' +
          ' at this time. Please try again later.');
        setLoggedInUser(null);
        setLoggedInUsername('');
        setLoggedInPassword('');
      }
    } 
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

        setUsers(usersCopy);
        setSuccessModal(true);
        setSuccessMsg('Your password has been successfully changed, ' +
          'you may now login!')
        setUpdateUser(null);
        setUserName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
        setStatus(false);

      } else {
        setErrorModal(true);
        setErrorMsg('We apologize, but your information could not be verified' +
          ' at this time. Please try again later.');
        setUpdateUser(null);
        setUserName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
      }
    } catch (err) {
      if (err) {
        setErrorModal(true);
        setErrorMsg('We apologize, but your information could not be verified' +
          ' at this time. Please try again later.');
        setUpdateUser(null);
        setUserName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
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
              <LoremIpsum p={1} />
            </div>
          </div>
        }
      </div>

      {errorModal === true
        ?
        <div>
          <div className='whole_view'></div>
          <div id='error_view'>
            <div id='error_header'>Ooops! Something went wrong!</div>
            <hr style={{
              width: '90%',
              color: 'black',
            }} />
            <div id='error_message'>
              { errorMsg }
            </div>
            <button type='button' id='error_btn'
              onClick={errorChange}>
              Close
            </button>  
          </div>
        </div>
        :
        <div></div>}
      
      {successModal === true
        ?
        <div>
          <div className='whole_view'></div>
          <div id='success_view'>
            <div id='success_header'>Hooray & Congratulations</div>
            <hr style={{
              width: '90%',
              color: 'black',
            }} />
            <div id='success_message'>
              { successMsg }
            </div>
            <button type='button' id='success_btn'
              onClick={successChange}>
              Confirm
            </button>  
          </div>
        </div>
        :
        <div></div>}

    </div>
  )
}
