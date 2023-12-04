import React from 'react'

import { NUMBER_OF_BEATS, NOTE_TYPES } from '../../utils/beat'
import * as styles from './styles'

interface TimeSignatureProps {
  numberOfBeats: number
  beatType: number
  onNumberOfBeatsChange: (numberOfBeats: number) => void
  onBeatValueChange: (beatType: number) => void
}

function TimeSignature({
  numberOfBeats,
  beatType,
  onNumberOfBeatsChange,
  onBeatValueChange,
}: TimeSignatureProps) {
  return (
    <styles.TimeSignature>
      <styles.Label>Time signature : </styles.Label>
      <styles.SelectsContainer>
        <styles.Select
          value={numberOfBeats}
          onChange={(event) =>
            onNumberOfBeatsChange(Number(event.target.value))
          }
        >
          {NUMBER_OF_BEATS.map((beat) => (
            <option key={beat} value={beat}>
              {beat}
            </option>
          ))}
        </styles.Select>

        <styles.Divider />

        <styles.Select
          value={beatType}
          onChange={(event) => onBeatValueChange(Number(event.target.value))}
        >
          {Object.values(NOTE_TYPES).map((noteType) => (
            <option key={noteType} value={noteType}>
              {noteType}
            </option>
          ))}
        </styles.Select>
      </styles.SelectsContainer>
    </styles.TimeSignature>
  )
}

export default TimeSignature
