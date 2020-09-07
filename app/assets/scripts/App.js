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
      displayText: 'TEST123'
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(text) {
    this.setState({displayText: text});
  }

  render() {
    return (
      <>
        <Controls displayText={this.state.displayText} />
        <Drumpads updateDisplay={this.updateDisplay} />
      </>
    );
  }


}

ReactDOM.render(<App />, document.querySelector('#drum-machine'));

if (module.hot) {
  module.hot.accept();
}
