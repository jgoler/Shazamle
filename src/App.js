import './App.css';
import GuessBox from './components/GuessBox';
import HTPModal from './components/HTPModal';
import AboutModal from './components/AboutModal';
import EndModal from './components/EndModal';
import EndLossModal from './components/EndLossModal';
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
  const [secondGuess, setSecondGuess] = useState();
  const [thirdGuess, setThirdGuess] = useState();
  const [fourthGuess, setFourthGuess] = useState();
  const [fifthGuess, setFifthGuess] = useState();
  const [sixthGuess, setSixthGuess] = useState();
  const [openEndModal, setOpenEndModal] = useState(false);
  const [openEndLossModal, setOpenEndLossModal] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [displayFirstX, setDisplayFirstX] = useState(false);

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

  let correctAnswer = 'Steal My Sunshine by LEN';

  const handleGuess = () => {
    if (!firstGuess) {
      if (curSearch === correctAnswer) {
        console.log('Correct answer, the game is over.');
        setOpenEndModal(true);
      } else {
        setDisplayFirstX(true);
      }
      setFirstGuess(curSearch);
      setDisableButton(true);
    } else if (!secondGuess) {
      if (curSearch === correctAnswer) {
        console.log('Correct answer, the game is over.');
        setOpenEndModal(true);
      }
      setSecondGuess(curSearch);
      setDisableButton(true);
    } else if (!thirdGuess) {
      if (curSearch === correctAnswer) {
        console.log('Correct answer, the game is over.');
        setOpenEndModal(true);
      }
      setThirdGuess(curSearch);
      setDisableButton(true);
    } else if (!fourthGuess) {
      if (curSearch === correctAnswer) {
        console.log('Correct answer, the game is over.');
        setOpenEndModal(true);
      }
      setFourthGuess(curSearch);
      setDisableButton(true);
    } else if (!fifthGuess) {
      if (curSearch === correctAnswer) {
        console.log('Correct answer, the game is over.');
        setOpenEndModal(true);
      }
      setFifthGuess(curSearch);
      setDisableButton(true);
    } else if (!sixthGuess) {
      if (curSearch === correctAnswer) {
        console.log('Correct answer, the game is over.');
        setOpenEndModal(true);
      } else {
        setOpenEndLossModal(true);
      }
      setSixthGuess(curSearch);
      setDisableButton(true);
    }
    setSearch('');
    setAutoCompleteSongs([]);
  };

  const guessClick = (text, text_two) => {
    //console.log(`Inside guessClick ${song.title}`);
    setSearch(`${text} by ${text_two}`);
    console.log(`Clicked on ${text}`);
    setDisableButton(false);
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
          <div className='IndividualGuessContainer'>
            <GuessBox name={firstGuess}></GuessBox>
            {displayFirstX ? (
              <h3 style={{ color: 'red' }}>X</h3>
            ) : (
              <h3 style={{ color: '#282c34' }}>X</h3>
            )}
          </div>
          <div className='IndividualGuessContainer'>
            <GuessBox name={secondGuess}></GuessBox>
            <h3>X</h3>
          </div>
          <div className='IndividualGuessContainer'>
            <GuessBox name={thirdGuess}></GuessBox>
            <h3>X</h3>
          </div>
          <div className='IndividualGuessContainer'>
            <GuessBox name={fourthGuess}></GuessBox>
            <h3>X</h3>
          </div>
          <div className='IndividualGuessContainer'>
            <GuessBox name={fifthGuess}></GuessBox>
            <h3>X</h3>
          </div>
          <div className='IndividualGuessContainer'>
            <GuessBox name={sixthGuess}></GuessBox>
            <h3>X</h3>
          </div>
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
            <button
              onClick={handleGuess}
              type='button'
              class='btn btn-success'
              disabled={disableButton}
            >
              Submit
            </button>
          </div>
        </form>
        {openModal && <HTPModal closeModal={setOpenModal} />}
        {openAboutModal && <AboutModal closeModal={setOpenAboutModal} />}
        {openEndModal && <EndModal closeModal={setOpenEndModal} />}
        {openEndLossModal && (
          <EndLossModal
            rightAnswer={correctAnswer}
            closeModal={setOpenEndLossModal}
          />
        )}
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
