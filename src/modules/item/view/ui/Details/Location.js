import React, { useEffect, useState, useContext } from 'react'
import { LocationOn } from 'styled-icons/material/LocationOn'
import styled from 'styled-components'

import { AppContext } from '../../../../../App'

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  .location {
    color: ${p => p.theme.primary};
    margin-right: 12px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .location-icon {
    fill: ${p => p.theme.primary};
  }
`

const Location = ({ location, latitude, longitude }) => {
  const [driveTime, setDriveTime] = useState('')
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

  return (
    <LocationWrapper>
      <div className='location'>{location}</div>
      <LocationOn className='location-icon' size={20} />
      <div className='pickup'>Local pickup ({driveTime} miles away)</div>
    </LocationWrapper>
  )
}

export default Location
