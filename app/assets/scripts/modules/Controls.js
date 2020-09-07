import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controls">
        <h1 className="controls__label">Super Duper Drum Machine</h1>
        <div id="display" className="controls__display">{this.props.displayText}</div>
      </div>
    );
  }
}

export default Controls;
