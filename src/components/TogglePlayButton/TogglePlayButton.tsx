import React from 'react'

import * as styles from './styles'

interface TogglePlayButtonProps {
  isActive: boolean
  onClick: () => void
}

export default function TogglePlayButton({
  isActive,
  onClick,
}: TogglePlayButtonProps) {
  return (
    <styles.PlayStopButton $isActive={isActive} onClick={onClick}>
      {isActive ? 'Stop' : 'Play'}
    </styles.PlayStopButton>
  )
}
