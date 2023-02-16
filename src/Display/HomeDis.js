import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeDis() {

  const navigate = useNavigate();

  const accessCheck = () => {
    localStorage.getItem('userName') === null 
      ? navigate('/login')
      : navigate('/home')
  }

  const handleLogout = (e) => {
    e.preventDefault()

    localStorage.clear()

    navigate('/login')
  }
  
  useEffect(() => {
    accessCheck()
  }, [])

  return (
    <div>
      <div>Hello {localStorage.firstName} {localStorage.lastName}</div>
      <buton id='home_btn' type='button' onClick={handleLogout}>
          Logout
      </buton>
    </div>
    
  )
}
