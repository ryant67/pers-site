import React from 'react';
import '../Style/error.css';

export default function ErrorDis() {
  return (
    <div id='whole_error'>
      <div id='error_text'>
        <div id='four_header'>Error 404!</div>
        <div id='four_body'>
          Apologies, but you seem to have wandered to a place that does not exist!!
        </div>
        <div>
          <i 
            style={{margin: '30px 0'}}
            class="fa-solid fa-10x fa-circle-exclamation"></i>
        </div>
      </div>
    </div>
  )
}
