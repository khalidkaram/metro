import { useEffect, useRef } from 'react'

export default function useInterval(
  callback: () => void,
  delay: number | null,
) {
  const savedCallback = useRef<() => void>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (!savedCallback.current) return

      savedCallback.current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }

    return () => {}
  }, [delay])
}
