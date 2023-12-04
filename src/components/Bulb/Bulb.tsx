import React, { useEffect } from 'react'

import { play } from '../../services/AudioContext'
import * as styles from './styles'

interface BulbProps {
  isActive: boolean
  beatNumber: number
}

function Bulb({ isActive, beatNumber }: BulbProps) {
  useEffect(() => {
    if (isActive) {
      play(beatNumber)
    }
  }, [isActive, beatNumber])

  return <styles.Bulb $isActive={isActive} />
}

export default React.memo(Bulb)
