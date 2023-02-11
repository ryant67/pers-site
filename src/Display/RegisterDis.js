import '../Style/register.css';
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';

export default function RegisterDis() {

  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (password === confPassword) {
        const res = await fetch('/api/users', {
          method: 'POST', body: JSON.stringify({
          firstName, lastName, age, email, userName, password
          })
        })
        const json = await res.json();

        setUsers([...users, json.user]);
        setFirstName('');
        setLastName('');
        setAge('')
        setEmail('');
        setUserName('');
        setPassword('');
        setConfPassword('');
        alert('Congratulations, your account was created successfully.' +  
          'You will now be redirected to our Login Page.')
        navigate('/login');
      } else {
        alert('Sorry, but your passwords do not match, please try again!');
      }
    } catch (err) {
      console.log(err);
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
      <div id='register_view'>
        <div id='register_directions'>
          <div id='register_header'>
            Create an Account
          </div>
          <div id='register_message'>Please fill out the below fields.</div>
        </div>
        <form onSubmit={submitForm}>

          <input
            type='text'
            className='form_field'
            placeholder='First Name'
            value={firstName}
            required={true}
            style={ firstName.length > 0
              ? { borderBottom: '2px solid blue' }
              : { borderBottom: '2px solid red'}}
            onChange={e => setFirstName(e.target.value)} />
          
          <input
            type='text'
            className='form_field'
            placeholder='Last Name'
            value={lastName}
            required={true}
            style={ lastName.length > 0
              ? { borderBottom: '2px solid blue' }
              : { borderBottom: '2px solid red'}}
            onChange={e => setLastName(e.target.value)} />
          
          <input
            type='email'
            className='form_field'
            placeholder='Email'
            value={email}
            required={true}
            style={email.length > 0
              && email.includes('@')
              && email.includes('.com')
              ? { borderBottom: '2px solid blue' }
              : { borderBottom: '2px solid red'}}
            onChange={e => setEmail(e.target.value)} />
          
          <input
            type='number'
            className='form_field'
            placeholder='Age'
            value={age}
            required={true}
            style={ age.length > 0
              ? { borderBottom: '2px solid blue' }
              : { borderBottom: '2px solid red'}}
            onChange={e => setAge(e.target.value)} />
          
          <input
            type='text'
            className='form_field'
            placeholder='Username'
            value={userName}
            required={true}
            style={ userName.length > 0
              ? { borderBottom: '2px solid blue' }
              : { borderBottom: '2px solid red'}}
            onChange={e => setUserName(e.target.value)} />
          
          <input
            type='password'
            className='form_field'
            placeholder='Password'
            value={password}
            required={true}
            style={ password.length > 0
              ? { borderBottom: '2px solid blue' }
              : { borderBottom: '2px solid red'}}
            onChange={e => setPassword(e.target.value)} />
          
          <input
            type='password'
            className='form_field'
            placeholder='Confirm Password'
            value={confPassword}
            required={true}
            style={ confPassword.length > 0
              && password === confPassword
              ? { borderBottom: '2px solid blue' }
              : { borderBottom: '2px solid red'}}
            onChange={e => setConfPassword(e.target.value)} />
          
          { password.length > 0
            &&
            confPassword.length > 0
            &&
            password !== confPassword
            ?
            <div
              style={{
                width: '450px',
                margin: 'auto',
                textAlign: 'start',
                fontSize: '12px'
              }}>
              Your passwords do not currently match.
            </div>
            :
            <div></div>}
          
          <button id='form_btn' type='submit'>Complete Registration</button>

        </form>

        <div id='reg_options'>
          <div id='login_redirect'>
            Already have an account?
            <div>
              <a href='/login'>
                Login
              </a>
            </div>
          </div>
        </div>

      </div>
      <div id='info_view'>
        <div id='info_text'>
          <LoremIpsum p={2} />
        </div>

      </div>
    </div>
  )
}
