import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Style/home.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeDis() {

  const navigate = useNavigate();
  const [bannerCheck, setBannerCheck] = useState(false);

  const bannerChange = (e) => {
    e.preventDefault();
    if (bannerCheck === false) {
      setBannerCheck(true);
    } else {
      setBannerCheck(false);
    }
  }

  const accessCheck = () => {
    localStorage.getItem('userName') !== null 
      ? navigate('/home')
      : navigate('/login')
  }
  
  useEffect(() => {
    accessCheck();
  }, [])

  return (
    <div>

      <Navbar />

      <div id='home_view'>
        <div id='home_banner'>
          Welcome, {' '}
            {bannerCheck === false
              ?
              <span onClick={bannerChange}>
                {localStorage.firstName}
              </span>
              :
              <span onClick={bannerChange}>
                {localStorage.userName}
              </span>
              }
          ! We're glad you're here!
        </div>
        <div id='home_message'>
          <div>
            Welcome to your home page. I truly am glad that you're here as
            this marks my first major solo project that I am quite excited to showcase.
            To start off, there are a few small knicks that show DOM manipulation and 
            just general things that came to mind that I thought would be cool to add.
            Of course there will be more added as time goes on. So I hope you enjoy!
          </div>  
        </div>

      </div>

      <Footer />

    </div>
    
  )
}
