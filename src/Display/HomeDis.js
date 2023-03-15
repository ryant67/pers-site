import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Style/home.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeDis() {

  const navigate = useNavigate();
  const date = new Date();
  const [bannerCheck, setBannerCheck] = useState(false);
  const [fuzzBuzzNum, setFuzzBuzzNum] = useState('');

  // converting age to days -----------------------------------------------------

  const [milliDay] = useState(86400000);
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [daysByMonth, setDaysByMonth] = useState('');

  const dateDisplay = () => {
    const date = new Date();

      document.getElementById('todaysDate').innerText =
        date.toDateString() + (' ') + date.toLocaleTimeString()
  }
  
  // ---------------------------------------------------------------------------- 

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
          '<li class=\'fuzz_listItem\'>' + 'FuzzBuzz' + '</li>'
        } else if (i % 3 === 0) {
          document.getElementById('fuzz_list').innerHTML +=
          '<li class=\'fuzz_listItem\'>' + 'Fuzz' + '</li>'
        } else if (i % 5 === 0) {
          document.getElementById('fuzz_list').innerHTML +=
          '<li class=\'fuzz_listItem\'>' + 'Buzz' + '</li>'
        } else {
          document.getElementById('fuzz_list').innerHTML +=
          '<li class=\'fuzz_listItem\'>' + i + '</li>'
        }
      }
    }
    setFuzzBuzzNum('');
  }

  const birthSubmit = (e) => {
    e.preventDefault();

    let y = date.getFullYear() - birthYear;
    let yy = y - 1;
    let m = 12 - birthMonth + date.getMonth() + 1;
    let mm = date.getMonth() + 1 - birthMonth;
    let d = date.getDate() - birthDay;
    let dd = date.getDate() + (daysByMonth - Number(birthDay));

    // -----------------------------------------------------------
    // Checking if the birth day has happened yet
    // -----------------------------------------------------------

    if (birthDay > date.getDate()) {
      document.getElementById('resulting_days').innerText =
        `You are ${dd} days old.`;
    } else {
      document.getElementById('resulting_days').innerText = 
        `You are ${d} days old.`
    }

    // -----------------------------------------------------------
    // Checking if the birth month has happened yet
    // -----------------------------------------------------------

    if (birthMonth > date.getMonth()) {
      document.getElementById('resulting_years').innerText =
        `You are ${yy} years, ${m} months old.`;
    } else {
      document.getElementById('resulting_years').innerText =
        `You are ${y} years, ${mm} months old.`;
    }
    
    // -----------------------------------------------------------
    // Acquiring accurate days of the month
    // -----------------------------------------------------------

    if (birthMonth === '1' || birthMonth === '01') {
      setDaysByMonth(31); // January
    } else if (birthMonth === '2' || birthMonth === '02') {
      setDaysByMonth(28); // February
    } else if (birthMonth === '3' || birthMonth === '03') {
      setDaysByMonth(31); // March
    } else if (birthMonth === '4' || birthMonth === '04') {
      setDaysByMonth(31); // April
    } else if (birthMonth === '5' || birthMonth === '05') {
      setDaysByMonth(31); // May
    } else if (birthMonth === '6' || birthMonth === '06') {
      setDaysByMonth(30); // June
    } else if (birthMonth === '7' || birthMonth === '07') {
      setDaysByMonth(31); // July
    } else if (birthMonth === '8' || birthMonth === '08') {
      setDaysByMonth(31); // August
    } else if (birthMonth === '9' || birthMonth === '09') {
      setDaysByMonth(30); // September
    } else if (birthMonth === '10') {
      setDaysByMonth(31); // October
    } else if (birthMonth === '11') {
      setDaysByMonth(30); // November
    } else if (birthMonth === '12') {
      setDaysByMonth(31); // December
    }

    setBirthMonth('');
    setBirthDay('');
    setBirthYear('');

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

    setInterval(() => {
      dateDisplay()
    }, 100);
    
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
        <div id='challenge_view'>

          {/* left side flex row */}
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
              <ul id='fuzz_list'></ul>
            </div>
          </div>

          {/* right side flex column */}
          <div id='smChallenge_view'>

            {/* right side layer 1 */}
            <div id='home_message'>
              <div>
                Welcome to your home page. I truly am glad that you're here as
                this marks my first major solo project that I am quite excited to showcase.
                To start off, there are a few small knicks that show DOM manipulation (some hidden,
                some visible) and just general things that came to mind that I thought would be
                cool to add. Of course, there will be more added as time goes on. So I hope you enjoy!
              </div>
            </div>
            
            {/* right side layer 2 */}
            <div id='date_view'>
              <div id='todaysDate'></div>

              <form
                onSubmit={birthSubmit}
                id='birth_form'>
                Enter your Birthday: {' '}
                <input
                  className='birthInput'
                  placeholder='mm'
                  value={birthMonth}
                  onChange={e => setBirthMonth(e.target.value)} />
                <span>/</span>
                <input
                  className='birthInput'
                  placeholder='dd'
                  value={birthDay}
                  onChange={e => setBirthDay(e.target.value)} />
                <span>/</span>
                <input
                  style={{width: '40px'}}
                  className='birthInput'
                  placeholder='yyyy'
                  value={birthYear}
                  onChange={e => setBirthYear(e.target.value)} />
                <button
                  id='birth_btn'
                  type='submit'>
                  <i className="fa-solid fa-lg fa-check"></i>
                </button>
              </form>

              <div id='birth_results'>
                <div id='resulting_years'></div>
                <div id='resulting_months'></div>
                <div id='resulting_days'></div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
    
  )
}
