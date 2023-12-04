import React from 'react'

import * as styles from './styles'
import Bulb from '../Bulb'

interface BulbsListProps {
  numberOfBeats: number
  isPlaying: boolean
  currentBeat: number
}

export default function BulbsList({
  numberOfBeats,
  isPlaying,
  currentBeat,
}: BulbsListProps) {
  return (
    <styles.BulbsList>
      {[...Array(numberOfBeats).keys()].map((value) => (
        <Bulb
          key={value}
          isActive={isPlaying && value === currentBeat}
          beatNumber={value}
        />
      ))}
    </styles.BulbsList>
  )
}
