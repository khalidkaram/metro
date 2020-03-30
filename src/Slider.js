import React from "react";

const Slider = ({bpm, onBpmChange}) => {
  return (
    <div>
      <label htmlFor="bpm">{bpm}</label>
      <input type="range" id="bpm" name="bpm" min="0" max="400" value={bpm} onChange={onBpmChange}/>
    </div>
  )
};

export default React.memo(Slider);
