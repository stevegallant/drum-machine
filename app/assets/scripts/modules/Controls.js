import React from 'react';

function Controls(props) {  
  
  return (
    <div className="controls">
      <h1 className="controls__label">Super Duper Drum Machine</h1>
      <label htmlFor="powerToggle" className="controls__label">Power</label>
      <label id="powerToggle" className="controls__powerToggle">
        <input type="checkbox" defaultChecked={props.poweredOn} onChange={props.togglePower} />
        <span className="controls__powerToggleSlider"></span>
      </label>
      <label htmlFor="vol" className="controls__label">Volume</label>
      <input className="controls__vol" type="range" id="vol" name="vol" onChange={props.adjustVolume} min="0" max="1" step=".01" defaultValue=".5" />
      <div id="display" className="controls__display">{props.poweredOn ? props.displayText : ' '}</div>
    </div>
  );
}

export default Controls;
