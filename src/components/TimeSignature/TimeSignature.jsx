import React from 'react';

import {NUMBER_OF_BEATS, NOTE_TYPES} from '../../utils/beat';
import * as styles from './styles';

function TimeSignature({numberOfBeats, beatType, onNumberOfBeatsChange, onBeatValueChange}) {
  return (
    <styles.TimeSignature>
      <styles.Label>Time signature : </styles.Label>
      <styles.SelectsContainer>
        <styles.Select value={numberOfBeats} onChange={onNumberOfBeatsChange}>
          {NUMBER_OF_BEATS.map(beat => (
            <option key={beat} value={beat}>
              {beat}
            </option>
          ))}
        </styles.Select>

        <styles.Divider />

        <styles.Select value={beatType} onChange={onBeatValueChange}>
          {Object.values(NOTE_TYPES).map(noteType => (
            <option key={noteType} value={noteType}>
              {noteType}
            </option>
          ))}
        </styles.Select>
      </styles.SelectsContainer>
    </styles.TimeSignature>
  );
}

export default TimeSignature;
