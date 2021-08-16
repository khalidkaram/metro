import React, {useEffect} from 'react';

import {play} from '../../services/AudioContext';
import * as styles from './styles';

const Bulb = ({isActive, beatNumber}) => {
  useEffect(() => {
    if (isActive) {
      play(beatNumber);
    }
  }, [isActive, beatNumber]);

  return <styles.Bulb isActive={isActive} />;
};

export default React.memo(Bulb);
