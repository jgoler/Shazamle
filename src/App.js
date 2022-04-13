import './App.css';
import GuessBox from './components/GuessBox';
import HTPModal from './components/HTPModal';
import AboutModal from './components/AboutModal';
import audio from './recordings/testrecording.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { BsPauseFill } from 'react-icons/bs';
//import jsonData from './data/songs.json';
var data = require('./data/songs.json');
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const searchSongs = async searchText => {
    //const res = await fetch('./data/songs.json');
    //const songs = await res.json();
    //console.log(songs);
    console.log(data);
  };

  const onChange = e => {
    searchSongs(e.target.value);
  };

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
                id='search'
                onChange={e => onChange(e)}
              ></input>
              <div id='match-list'></div>
            </div>
            <button type='button' class='btn btn-success'>
              Submit
            </button>
          </div>
        </form>
        {openModal && <HTPModal closeModal={setOpenModal} />}
        {openAboutModal && <AboutModal closeModal={setOpenAboutModal} />}
        <div className='button-container'>
          <button
            type='button'
            class='btn btn-link'
            onClick={() => {
              togglePlayPause();
            }}
          >
            {playMusic ? (
              <BsPauseFill size={35} color='white' />
            ) : (
              <BsPlayFill size={35} color='white' />
            )}
          </button>
          <audio ref={audioPlayer} src={audio} />
        </div>
      </header>
    </div>
  );
}

export default App;
