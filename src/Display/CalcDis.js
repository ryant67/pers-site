import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Style/calc.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CalcDis() {

  const navigate = useNavigate();

  const accessCheck = () => {
    localStorage.getItem('userName') !== null 
      ? navigate('/calc')
      : navigate('/login')
  }

  useEffect(() => {
    accessCheck()
  }, [])

  return (
    <div>

      <Navbar />

      <div id='calc_dis'>
        <div id='calc_text'>
          <div id='calc_header'>
            Calculator Project
          </div>
        </div>
        <div id='whole_calc'>
          <div id='calc_outline'>
            <div id='text_field'></div>
            <div id='btn_field'>
              <div
                className='operator_btn'
                onClick={e => 
                document.getElementById('text_field').innerText = ''}>
                C
              </div>
              <div className='operator_btn'>+ / -</div>
              <div className='operator_btn'>%</div>
              <div className='operator_btn'>
                <i class="fa-solid fa-divide"></i>
              </div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 7}>
                7
              </div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 8}>
                8
              </div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 9}>
                9
              </div>
              <div className='operator_btn'>x</div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 4}>
                4
              </div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 5}>
                5
              </div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 6}>
                6
              </div>
              <div className='operator_btn'>-</div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 1}>
                1
              </div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 2}>
                2
              </div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 3}>
                3
              </div>
              <div className='operator_btn'>+</div>
              <div
                id='big_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += 0}>
                0
              </div>
              <div
                className='number_btn'
                onClick={e => 
                document.getElementById('text_field').innerText += '.'}>
                .
              </div>
              <div className='operator_btn'>=</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}
