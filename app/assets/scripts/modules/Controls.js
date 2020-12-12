import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controls">
        <h1 className="controls__label">Super Duper Drum Machine</h1>
        <label htmlFor="" className="controls__label">Power</label>
        <label className="controls__powerToggle">
          <input type="checkbox"/>
          <span className="controls__powerToggle--slider"></span>
        </label>
        <label htmlFor="vol" className="controls__label">Volume</label>
        <input className="controls__vol" type="range" id="vol" name="vol" min="0" max="1" step=".1" value=".5" />
        <div id="display" className="controls__display">{this.props.displayText}</div>
      </div>
    );
  }
}

export default Controls;
