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
import TestDis from './Display/TestDis';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingDis />} />
        <Route path='/login' element={<LoginDis />} />
        <Route path='/register' element={<RegisterDis />} />
        <Route path='/home' element={<HomeDis />} />
        <Route path='/test' element={<TestDis />} />
        
        {/* Error 404 page for unfound pages */}
        <Route path='*' element={<ErrorDis />} />
      </Routes>
    </Router>
  )
}

