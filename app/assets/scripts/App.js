import '../styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

// My components
import Drumpads from './modules/Drumpads';
import Controls from './modules/Controls';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poweredOn: false,
      displayText: 'READY',
      volume: '.02'
    };
    this.togglePower = this.togglePower.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
  }

  togglePower() {
    this.setState({poweredOn: !this.state.poweredOn});
    this.updateDisplay('READY');
  }

  adjustVolume(e) {
    if (this.state.poweredOn) {
      this.setState({
        volume: e.target.value,
        displayText: 'Volume: ' + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.setState({displayText: ''}), 2000);
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(clip => {
        clip.volume = this.state.volume;
      });
    };
  }

  updateDisplay(text) {
    this.setState({displayText: text});
  }

  render() {
    return (
      <>
        <Controls togglePower={this.togglePower} poweredOn={this.state.poweredOn} adjustVolume={this.adjustVolume} displayText={this.state.displayText} />
        <Drumpads poweredOn={this.state.poweredOn} updateDisplay={this.updateDisplay} />
      </>
    );
  } 
}

ReactDOM.render(<App />, document.querySelector('#drum-machine'));

if (module.hot) {
  module.hot.accept();
}