import './App.css';
import GuessBox from './components/GuessBox';
import HTPModal from './components/HTPModal';
import AboutModal from './components/AboutModal';
import audio from './recordings/testrecording.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { BsPauseFill } from 'react-icons/bs';

var data = require('./data/songs.json');
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [autocompleteSongs, setAutoCompleteSongs] = useState([]);
  const [curSearch, setSearch] = useState('');
  const [firstGuess, setFirstGuess] = useState();

  const searchSongs = async searchText => {
    //console.log(data);
    let matches = data.filter(song => {
      const regex = new RegExp(`^${searchText}`, 'gi');
      return song.title.match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
    }
    matches = matches.slice(0, 3);
    setAutoCompleteSongs(matches);

    console.log(matches);
  };

  const onChange = e => {
    //console.log(`e.target.value ${e.target.value}`);
    setSearch(e.target.value);
    searchSongs(e.target.value);
    //console.log(`curSearch is ${curSearch}`);
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

  const guessClick = (text, text_two) => {
    //console.log(`Inside guessClick ${song.title}`);
    setSearch(`${text} by ${text_two}`);
    console.log(`Clicked on ${text}`);
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
        <form>
          <div className='input'>
            <div className='form-group'>
              <input
                className='input_itself'
                class='form-control'
                type='text'
                placeholder='Song Guess'
                id='search'
                value={curSearch}
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
        {autocompleteSongs.map(song => (
          <div
            onClick={text => guessClick(song.title, song.artist)}
            className='SongOption'
          >
            {song.title} by {song.artist}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
