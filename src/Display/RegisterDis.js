import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div id='register_view'>
      <form onSubmit={submitForm}>

        <input type='text' className='form_field' placeholder='First Name' value={firstName}
          onChange={e => setFirstName(e.target.value)} required={true} />
        
        <input type='text' className='form_field' placeholder='Last Name' value={lastName}
          onChange={e => setLastName(e.target.value)} required={true} />
        
        <input type='email' className='form_field' placeholder='Email' value={email}
          onChange={e => setEmail(e.target.value)} required={true} />
        
        <input type='number' className='form_field' placeholder='Age' value={age}
          onChange={e => setAge(e.target.value)} required={true} />
        
        <input type='text' className='form_field' placeholder='Username' value={userName}
          onChange={e => setUserName(e.target.value)} required={true} />
        
        <input type='password' className='form_field' placeholder='Password' value={password}
          onChange={e => setPassword(e.target.value)} required={true} />
        
        <input type='password' className='form_field' placeholder='Confirm Password' value={confPassword}
          onChange={e => setConfPassword(e.target.value)} required={true} />
        
        <button type='submit'>Complete Registration</button>
      </form>
    </div>
  )
}
