import React, { useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { AppContext } from '../../../../../App'

export const HereMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => p.theme.grey[2]};
  .map {
    height: 250px;
  }
  .map-info {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    .city {
      font-weight: 700;
      margin-right: 16px;
    }
    .label {
      font-size: 14px;
      color: ${p => p.theme.grey[5]};
    }
  }
`

const HereMap = ({ location, latitude, longitude }) => {
  const { platform } = useContext(AppContext)
  const mapRef = useRef(null)

  useEffect(() => {
    const { H, devicePixelRatio } = window

    const defaultLayers = platform.createDefaultLayers()
    const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      zoom: 10,
      center: { lat: latitude, lng: longitude },
      pixelRatio: devicePixelRatio || 1
    })

    const circle = new H.map.Circle({ lat: latitude, lng: longitude }, 4000, {
      style: { fillColor: 'rgba(151,206,162,0.5)', lineWidth: 0 }
    })
    map.addObject(circle)

    window.addEventListener('resize', () => map.getViewPort().resize())

    return () => {
      window.removeEventListener('resize', () => map.getViewPort().resize())
    }
  }, [platform, latitude, longitude])

  return (
    <HereMapWrapper>
      <div ref={mapRef} className='map' />
      <div className='map-info'>
        <div className='city'>{location}</div>
        <div className='label'>Map is approximate to keep the seller's location private</div>
      </div>
    </HereMapWrapper>
  )
}

export default HereMap
