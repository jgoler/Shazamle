import logo from './logo.svg';
import './App.css';
import GuessBox from './components/GuessBox';
import HTPModal from './components/HTPModal';
import AboutModal from './components/AboutModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openAboutModal, setOpenAboutModal] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='nav'>
          <div className='First-Header-Item'>
            <button
              type='button'
              class='btn btn-success'
              onClick={() => {
                setOpenAboutModal(true);
              }}
            >
              About
            </button>
          </div>
          <div className='Second-Header-Item'>
            <h2>Shazamle</h2>
          </div>
          <div className='Third-Header-Item'>
            <button
              type='button'
              class='btn btn-success'
              onClick={() => {
                setOpenModal(true);
              }}
            >
              How to play
            </button>
          </div>
        </div>
        <div className='GuessContainer'>
          <GuessBox name='Song 1'></GuessBox>
          <GuessBox name='Song 2'></GuessBox>
          <GuessBox name='Song 3'></GuessBox>
          <GuessBox name='Song 4'></GuessBox>
          <GuessBox name='Song 5'></GuessBox>
          <GuessBox name='Song 6'></GuessBox>
        </div>
        <form>
          <div className='input'>
            <div className='form-group'>
              <input
                class='form-control'
                type='text'
                placeholder='Song Guess'
              ></input>
            </div>
            <button type='button' class='btn btn-success'>
              Submit
            </button>
          </div>
        </form>
        {openModal && <HTPModal closeModal={setOpenModal} />}
        {openAboutModal && <AboutModal closeModal={setOpenAboutModal} />}
      </header>
    </div>
  );
}

export default App;
