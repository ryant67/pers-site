import '../Style/tbd.css';
import React from 'react';

export default function TbdDis() {
    return (
        <div id='whole_tbd'>
            <div id='tbd_text'>
                <div id='tbd_header'>
                    Hey {localStorage.firstName}! <br />
                    ( {localStorage.userName} )
                </div>
                <div id='tbd_message'>
                    You've found a page that is currently in
                    the works. I'm sure if you came back soon there
                    would be something pretty cool here to check out! <br />
                    Thank you for visiting!
                </div>
            </div>
        </div>
  )
}
