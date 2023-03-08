import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Style/home.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeDis() {

  const navigate = useNavigate();
  const [bannerCheck, setBannerCheck] = useState(false);
  const [fuzzBuzzNum, setFuzzBuzzNum] = useState('');

  const bannerChange = (e) => {
    e.preventDefault();
    if (bannerCheck === false) {
      setBannerCheck(true);
    } else {
      setBannerCheck(false);
    }
  }

  const fuzzSubmit = (e) => {
    e.preventDefault();
    console.log(fuzzBuzzNum)
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

        <hr id='home_divider'/>
        
        <div id='knicks_view'> 
          
          <div id='fuzzBuzz_view'>
            <div id='fuzzBuzz_header'>
              Fuzz Buzz Challenge
            </div>
            <div id='fuzzBuzz_directions'>
              Here we're gonna perform the 'Fuzz Buzz' Challenge.
              Pick any number you'd like. (Remember though: the higher the number
              the longer the list of numbers)
            </div>

            <div id='fuzzBuzz_selection'>

              <form onSubmit={fuzzSubmit}>

                <input
                  type='number'
                  id='fuzzBuzz_input'
                  placeholder='Select your number'
                  value={fuzzBuzzNum}
                  onChange={e => setFuzzBuzzNum(e.target.value)} />
                <button
                  id='fuzz_btn'
                  type='submit'>
                  <i className="fa-solid fa-lg fa-check"></i>
                </button>

              </form>

            </div>

            <hr id='fuzzBuzz_divider'/>

          </div>

        </div>
          
        <div id='home_message'>
          <div>
            Welcome to your home page. I truly am glad that you're here as
            this marks my first major solo project that I am quite excited to showcase.
            To start off, there are a few small knicks that show DOM manipulation (some hidden,
            some visible) and just general things that came to mind that I thought would be
            cool to add. Of course, there will be more added as time goes on. So I hope you enjoy!
          </div>  
        </div>

      </div>

      <Footer />

    </div>
    
  )
}
