import React from 'react';

import * as styles from './styles';

export default function BpmDisplay({bpm}) {
  return (
    <styles.BpmDisplay>
      {bpm} <styles.BpmText>BPM</styles.BpmText>
    </styles.BpmDisplay>
  );
}
