import React from 'react';

import * as styles from './styles';

const Slider = ({bpm, onBpmChange}) => (
  <styles.RangeInput
    type="range"
    id="bpm"
    name="bpm"
    min="0"
    max="300"
    value={bpm}
    onChange={onBpmChange}
    step="5"
  />
);

export default React.memo(Slider);
