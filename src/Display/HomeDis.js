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

    document.getElementById('fuzz_list').innerHTML = 
      ""

    if (fuzzBuzzNum === '') {
      document.getElementById('fuzz_list').innerHTML =
        '<li>' + 'No number was selected' + '</li>'
    } else {
      for (let i = 1; i <= fuzzBuzzNum; i++) {
        if (i % 15 === 0) {
          document.getElementById('fuzz_list').innerHTML +=
          '<li>' + 'FuzzBuzz' + '</li>'
        } else if (i % 3 === 0) {
          document.getElementById('fuzz_list').innerHTML +=
          '<li>' + 'Fuzz' + '</li>'
        } else if (i % 5 === 0) {
          document.getElementById('fuzz_list').innerHTML +=
          '<li>' + 'Buzz' + '</li>'
        } else {
          document.getElementById('fuzz_list').innerHTML +=
          '<li>' + i + '</li>'
        }
      }
    }
    setFuzzBuzzNum('');
  }

  const handleClear = (e) => {
    e.preventDefault();
    document.getElementById('fuzz_list').innerHTML = 
      " "
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
                  className='fuzz_btn'
                  type='submit'>
                  <i className="fa-solid fa-lg fa-check"></i>
                </button>
                <button
                  className='fuzz_btn'
                  type='button'
                  onClick={handleClear}>
                  <i className="fa-solid fa_lg fa-x"></i>
                </button>

              </form>

            </div>

            <hr id='fuzzBuzz_divider' />
            
            <div id='fuzz_results'>
              <ul id='fuzz_list'>
              </ul>
            </div>

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
