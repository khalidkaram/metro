import React from 'react'

import * as styles from './styles'

interface BpmDisplayProps {
  bpm: number
}

export default function BpmDisplay({ bpm }: BpmDisplayProps) {
  return (
    <styles.BpmDisplay>
      {bpm} <styles.BpmText>BPM</styles.BpmText>
    </styles.BpmDisplay>
  )
}
