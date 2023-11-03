import React from 'react';

import * as styles from './styles';
import Bulb from '../Bulb';

function BulbsList({numberOfBeats, isPlaying, currentBeat}) {
  return (
    <styles.BulbsList>
      {[...Array(numberOfBeats).keys()].map(value => (
        <Bulb key={value} isActive={isPlaying && value === currentBeat} beatNumber={value} />
      ))}
    </styles.BulbsList>
  );
}

export default React.memo(BulbsList);
