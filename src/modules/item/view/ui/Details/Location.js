import React from 'react'
import { LocationOn } from 'styled-icons/material/LocationOn'
import styled from 'styled-components'

import { useDriveTime } from '../../../../../utils/useDriveTime'

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
  const driveTime = useDriveTime(latitude, longitude)

  return (
    <LocationWrapper>
      <div className='location'>{location}</div>
      <LocationOn className='location-icon' size={20} />
      <div className='pickup'>Local pickup ({driveTime} miles away)</div>
    </LocationWrapper>
  )
}

export default Location
