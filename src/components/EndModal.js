import React from 'react';

function EndModal({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className='title'>
          <h1>Congratulations!</h1>
        </div>
        <div className='body'>
          <p>
            You solved today's Shazamle in 14 seconds. Make sure to come back
            tomorrow. A new Shazamle is released everyday.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EndModal;
