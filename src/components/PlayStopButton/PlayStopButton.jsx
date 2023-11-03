import React from 'react';

import * as styles from './styles';

function PlayStopButton({isActive, onClick}) {
  return (
    <styles.PlayStopButton $isActive={isActive} onClick={onClick}>
      {isActive ? 'Stop' : 'Play'}
    </styles.PlayStopButton>
  );
}

export default React.memo(PlayStopButton);
