import React from 'react';

function EndLossModal({ closeModal, rightAnswer }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className='title'>
          <h1>Unlucky</h1>
        </div>
        <div className='body'>
          <p>
            We're sorry, you were not able to get today's Shazamle. Come back
            tomorrow to try again!
          </p>
          <h5>Correct Answer: {rightAnswer}</h5>
        </div>
      </div>
    </div>
  );
}

export default EndLossModal;
