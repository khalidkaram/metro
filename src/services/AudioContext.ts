const NOTE_DURATION = 0.05

const NOTE_FREQUENCY = 440.0

const audioContext = new AudioContext()

export function play(beatNumber: number) {
  const osc = audioContext.createOscillator()
  osc.connect(audioContext.destination)

  if (beatNumber % 16 === 0) {
    osc.frequency.value = NOTE_FREQUENCY - 200
  } else {
    osc.frequency.value = NOTE_FREQUENCY
  }

  osc.start(audioContext.currentTime)
  osc.stop(audioContext.currentTime + NOTE_DURATION)
}
