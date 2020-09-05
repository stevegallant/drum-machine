import '../styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

// My components


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div class="controls">
          <h1 class="controls__label">Super Duper Drum Machine</h1>
          <div id="display" class="controls__display">Display</div>
        </div>
        <div class="btn-grid">
          <div class="drum-pad">Q
            <audio id="Q" class="clip" src="./assets/audio/crash.mp3">Audio element not supported in your browser.</audio>
          </div>
          <div class="drum-pad">W</div>
          <div class="drum-pad">E</div>
          <div class="drum-pad">A</div>
          <div class="drum-pad">S</div>
          <div class="drum-pad">D</div>
          <div class="drum-pad">Z</div>
          <div class="drum-pad">X</div>
          <div class="drum-pad">C</div>
        </div>
      </>
    );
  }


}

ReactDOM.render(<App />, document.querySelector('#drum-machine'));

if (module.hot) {
  module.hot.accept();
}
