import React from 'react';

function HTPModal({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className='title'>
          <h1>About Shazamle</h1>
        </div>
        <div className='body'>
          <p>Shazamle was created by Jack Goler</p>
        </div>
      </div>
    </div>
  );
}

export default HTPModal;
