export const NOTE_TYPES = {
  WHOLE_NOTE: 1,
  HALF_NOTE: 2,
  QUARTER_NOTE: 4,
  EIGHTH_NOTE: 8,
  SIXTEENTH_NOTE: 16,
} as const

export const NUMBER_OF_BEATS: Array<number> = [...Array(16).keys()].map(
  (n) => n + 1,
)
