import { useEffect } from 'react'
import axios from 'axios'

export function useLocation(platform) {
  useEffect(() => {
    if (!platform || window.localStorage.getItem('od_location')) {
      return
    }
    const url = `https://ipinfo.io/geo?token=${process.env.REACT_APP_IP_INFO_TOKEN}`
    axios.get(url).then(res => {
      if (res.status === 200) {
        const [latitude, longitude] = res.data.loc.split(',').map(Number)

        const reverseGeocodingParameters = {
          prox: `${latitude},${longitude}`,
          mode: 'retrieveAddress',
          maxResults: 1
        }

        const onSuccess = result => {
          const { City, State } = result.Response.View[0].Result[0].Location.Address
          const location = `${City}, ${State}`
          const data = { latitude, longitude, location }
          window.localStorage.setItem('od_location', JSON.stringify(data))
        }

        const onError = error => {
          console.log(error)
        }

        const geocoder = platform.getGeocodingService()
        geocoder.reverseGeocode(reverseGeocodingParameters, onSuccess, onError)
      }
    })
  }, [platform])
}
