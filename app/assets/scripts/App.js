import '../styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

// My components
import Drumpads from './modules/Drumpads';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="controls">
          <h1 className="controls__label">Super Duper Drum Machine</h1>
          <div id="display" className="controls__display">Display</div>
        </div>
        <Drumpads />
      </>
    );
  }


}

ReactDOM.render(<App />, document.querySelector('#drum-machine'));

if (module.hot) {
  module.hot.accept();
}
