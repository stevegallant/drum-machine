import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controls">
        <h1 className="controls__label">Super Duper Drum Machine</h1>

        <input type="range" id="vol" name="vol" min="0" max="1" step=".1" value=".5" />
        <label htmlFor="vol" className="controls__label">Volume</label>
        
        <div id="display" className="controls__display">{this.props.displayText}</div>
      </div>
    );
  }
}

export default Controls;
