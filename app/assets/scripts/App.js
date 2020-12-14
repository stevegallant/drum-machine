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
      volume: '.2'
    };
    this.togglePower = this.togglePower.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  togglePower() {
    this.setState({poweredOn: !this.state.poweredOn});
  }

  updateDisplay(text) {
    this.setState({displayText: text});
  }

  render() {
    return (
      <>
        <Controls togglePower={this.togglePower} poweredOn={this.state.poweredOn} displayText={this.state.displayText} />
        <Drumpads poweredOn={this.state.poweredOn} updateDisplay={this.updateDisplay} />
      </>
    );
  } 


}

ReactDOM.render(<App />, document.querySelector('#drum-machine'));

if (module.hot) {
  module.hot.accept();
}
