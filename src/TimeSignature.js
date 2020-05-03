import React from 'react';
import { range } from './helpers';

const TimeSignature = ({ numberOfBeats, beatValue, onNumberOfBeatsChange, onBeatValueChange }) => {
  const numbersOfBeats = React.useMemo(() => range(1, 16), []);
  const beatValues = React.useMemo(() => range(2, 8, 2), []);

  return (
    <div>
      <select onChange={onNumberOfBeatsChange}>
        {numbersOfBeats.map((beat) => (
          <option key={beat} {...(numberOfBeats === beat ? { selected: true } : {})}>
            {beat}
          </option>
        ))}
      </select>
      <select onChange={onBeatValueChange}>
        {beatValues.map((value) => (
          <option key={value} {...(beatValue === value ? { selected: true } : {})}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSignature;
