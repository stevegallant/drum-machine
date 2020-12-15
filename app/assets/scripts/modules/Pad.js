import React from 'react';

const Pad = (props) => {
  return (
    <div className="drum-pad" role="button" onMouseDown={props.onMouseDown} id={props.id} onTouchStart={props.onMouseDown}>{props.keyboard}
      <audio id={props.keyboard} className="clip" src={props.src}>Audio element not supported in your browser.</audio>
    </div>
  );
};

export default Pad;
