import React from 'react';

import * as styles from './styles';

const PlayStopButton = ({isActive, onClick}) => (
  <styles.PlayStopButton $isActive={isActive} onClick={onClick}>
    {isActive ? 'Stop' : 'Play'}
  </styles.PlayStopButton>
);

export default React.memo(PlayStopButton);
