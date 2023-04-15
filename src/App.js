import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';
import LandingDis from './Display/LandingDis';
import LoginDis from './Display/LoginDis';
import RegisterDis from './Display/RegisterDis';
import HomeDis from './Display/HomeDis';
import ErrorDis from './Display/ErrorDis';
import AboutDis from './Display/AboutDis';
import CalcDis from './Display/CalcDis';
import TbdDis from './Display/TbdDis';
import WeatherDis from './Display/WeatherDis';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingDis />} />
        <Route path='/login' element={<LoginDis />} />
        <Route path='/register' element={<RegisterDis />} />
        <Route path='/home' element={<HomeDis />} />
        <Route path='/about' element={<AboutDis />} />
        <Route path='/calc' element={<CalcDis />} />
        <Route path='/tbd' element={<TbdDis />} />
        <Route path='/weather' element={<WeatherDis />} />
        
        {/* Error 404 page for unfound pages */}
        <Route path='*' element={<ErrorDis />} />
      </Routes>
    </Router>
  )
}

