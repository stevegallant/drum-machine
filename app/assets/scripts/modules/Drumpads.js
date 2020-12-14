import React from 'react';
import Pad from './Pad';

class Drumpads extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', e => this.handleKeyPress(e));
    document.addEventListener('keyup', e => this.handleKeyUp(e));
  }

  handleClick(e) {
    if (this.props.poweredOn) {
      let audio = document.getElementById(e.target.innerText);
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
      };
      this.props.updateDisplay(e.target.id);
    }
  }

  handleKeyPress(e) {
    if (this.props.poweredOn) {
      let audio = document.getElementById(String.fromCharCode(e.keyCode));
      let pad = audio.closest(".drum-pad");
      pad.classList.add("drum-pad--pressed");
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
      };
      this.props.updateDisplay(pad.id);
    }    
  }

  handleKeyUp(e) {
    if (this.props.poweredOn) {
      let audio = document.getElementById(String.fromCharCode(e.keyCode));
      audio.closest(".drum-pad").classList.remove("drum-pad--pressed");
    }    
  }

  render() {
    return (
      <div className="btn-grid">
        {Bank1.map((value, index) => {
          return <Pad key={index} keyboard={value.keyboard} src={value.src} id={value.display} onClick={this.handleClick}/>
        })}
      </div>
    );
  }
};



const Bank1 = [
  {
    keyboard: 'Q',
    display: 'HI-HAT SPLASH',
    src: './assets/audio/hh-splash.mp3'
  },
  {
    keyboard: 'W',
    display: 'HI-HAT CLOSED',
    src: './assets/audio/hh-closed.mp3'
  },
  {
    keyboard: 'E',
    display: 'MORE COWBELL',
    src: './assets/audio/cowbell.mp3'
  },
  {
    keyboard: 'A',
    display: 'HIGH TOM-TOM',
    src: './assets/audio/hi-tom.mp3'
  },
  {
    keyboard: 'S',
    display: 'MID TOM-TOM',
    src: './assets/audio/mid-tom.mp3'
  },
  {
    keyboard: 'D',
    display: 'LOW TOM-TOM',
    src: './assets/audio/low-tom.mp3'
  },
  {
    keyboard: 'Z',
    display: 'SNARE',
    src: './assets/audio/snare.mp3'
  },
  {
    keyboard: 'X',
    display: 'BASS',
    src: './assets/audio/bass.mp3'
  },
  {
    keyboard: 'C',
    display: 'CRASH CYMBAL',
    src: './assets/audio/crash.mp3'
  },
];

export default Drumpads;
