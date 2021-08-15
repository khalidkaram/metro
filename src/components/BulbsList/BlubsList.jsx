import React from 'react';

import * as styles from './styles';
import Bulb from '../Bulb';

const BulbsList = ({numberOfBeats, isPlaying, currentBeat}) => (
    <styles.BulbsList>
      {[...Array(numberOfBeats).keys()].map(value => (
        <Bulb key={value} isActive={isPlaying && value === currentBeat} />
      ))}
    </styles.BulbsList>
  );

export default React.memo(BulbsList);
