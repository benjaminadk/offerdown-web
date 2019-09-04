import { useState, useEffect } from 'react'

export function usePosition(element) {
  const [position, setPosition] = useState([0, 0])

  useEffect(() => {
    if (!element) return

    const { innerWidth, innerHeight } = window
    const { clientWidth, clientHeight } = element

    function onResize() {
      const x = innerWidth / 2 - clientWidth / 2
      const y = innerHeight / 2 - clientHeight / 2
      setPosition([x, y])
    }

    onResize()

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [element])

  return position
}
