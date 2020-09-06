import React from 'react';
import Pad from './Pad';

class Drumpads extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', e => this.handleKeyPress(e));
    document.addEventListener('keyup', e => this.handleKeyUp(e));
  }

  handleClick(e) {
    let audio = document.getElementById(e.target.innerText);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    };
  }

  handleKeyPress(e) {
    // console.log('key press ' + String.fromCharCode(e.keyCode));
    let audio = document.getElementById(String.fromCharCode(e.keyCode));
    console.log('selected element is ' + audio);
    audio.closest(".drum-pad").classList.add("drum-pad--pressed");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    };
  }

  handleKeyUp(e) {
    let audio = document.getElementById(String.fromCharCode(e.keyCode));
    audio.closest(".drum-pad").classList.remove("drum-pad--pressed");
  }

  render() {
    return (
      <div className="btn-grid">
        {Bank1.map((value, index) => {
          return <Pad key={index} id={value.id} src={value.src} onClick={this.handleClick}/>
        })}
      </div>
    );
  }
};



const Bank1 = [
  {
    id: 'Q',
    src: './assets/audio/hh-splash.mp3'
  },
  {
    id: 'W',
    src: './assets/audio/hh-closed.mp3'
  },
  {
    id: 'E',
    src: './assets/audio/cowbell.mp3'
  },
  {
    id: 'A',
    src: './assets/audio/hi-tom.mp3'
  },
  {
    id: 'S',
    src: './assets/audio/mid-tom.mp3'
  },
  {
    id: 'D',
    src: './assets/audio/low-tom.mp3'
  },
  {
    id: 'Z',
    src: './assets/audio/snare.mp3'
  },
  {
    id: 'X',
    src: './assets/audio/bass.mp3'
  },
  {
    id: 'C',
    src: './assets/audio/crash.mp3'
  },
];

export default Drumpads;
