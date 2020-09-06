import React from 'react';

const Pad = (props) => {
  return (
    <div className="drum-pad" role="button" onClick={props.onClick}>{props.id}
      <audio id={props.id} className="clip" src={props.src}>Audio element not supported in your browser.</audio>
    </div>
  );
};

export default Pad;
