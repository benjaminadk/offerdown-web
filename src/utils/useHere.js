import { useEffect, useState } from 'react'

export function useHere() {
  const [platform, setPlatform] = useState(null)

  useEffect(() => {
    setPlatform(
      new window.H.service.Platform({
        apikey: process.env.REACT_APP_HERE_API_KEY
      })
    )
  }, [])

  return platform
}
