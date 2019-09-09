import { useState, useEffect, useContext } from 'react'

import { AppContext } from '../App'

export function useDriveTime(latitude, longitude) {
  const [driveTime, setDriveTime] = useState(null)
  const { platform } = useContext(AppContext)

  useEffect(() => {
    const { localStorage } = window
    const userLocation = JSON.parse(localStorage.getItem('od_location'))

    if (userLocation && userLocation.latitude && userLocation.longitude) {
      const router = platform.getRoutingService()
      const options = {
        waypoint0: `geo!${latitude},${longitude}`,
        waypoint1: `geo!${userLocation.latitude},${userLocation.longitude}`,
        mode: 'fastest;car;traffic:disabled'
      }

      const onSuccess = result => {
        const { distance } = result.response.route[0].summary
        setDriveTime(Math.round(distance / 1600))
      }

      const onError = error => {
        console.log(error)
      }

      router.calculateRoute(options, onSuccess, onError)
    }
  }, [platform, latitude, longitude])

  return driveTime
}
