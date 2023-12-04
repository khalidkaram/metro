import React from 'react'

import * as styles from './styles'

interface SliderProps {
  bpm: number
  onBpmChange: (bpm: number) => void
}

export default function Slider({ bpm, onBpmChange }: SliderProps) {
  return (
    <styles.RangeInput
      type="range"
      id="bpm"
      name="bpm"
      min="0"
      max="300"
      value={bpm}
      onChange={(event) => onBpmChange(Number(event.target.value))}
      step="5"
    />
  )
}
