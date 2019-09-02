import { useState, useEffect } from 'react'

export function useColumnCount(totalCardWidth, padding) {
  const [columnCount, setColumnCount] = useState(() =>
    Math.floor((window.innerWidth - padding) / totalCardWidth)
  )

  useEffect(() => {
    const handler = () => setColumnCount(Math.floor((window.innerWidth - padding) / totalCardWidth))
    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [totalCardWidth, padding])

  return columnCount
}
