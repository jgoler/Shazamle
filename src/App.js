import logo from './logo.svg';
import './App.css';
import GuessBox from './components/GuessBox';
import HTPModal from './components/HTPModal';
import AboutModal from './components/AboutModal';
import audio from './recordings/testrecording.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const audioPlayer = useRef();

  const togglePlayPause = () => {
    const prevValue = playMusic;
    setPlayMusic(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };
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
          <GuessBox></GuessBox>
          <GuessBox></GuessBox>
          <GuessBox></GuessBox>
          <GuessBox></GuessBox>
          <GuessBox></GuessBox>
          <GuessBox></GuessBox>
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
        <div>
          <button
            type='button'
            class='btn btn-secondary'
            onClick={() => {
              togglePlayPause();
            }}
          >
            Play
          </button>
          <audio ref={audioPlayer} src={audio} />
        </div>
      </header>
    </div>
  );
}

export default App;
