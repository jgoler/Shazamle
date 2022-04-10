import React from 'react';

function HTPModal({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className='title'>
          <h1>How To Play</h1>
        </div>
        <div className='body'>
          <p>Instructions for how to play.</p>
        </div>
      </div>
    </div>
  );
}

export default HTPModal;
