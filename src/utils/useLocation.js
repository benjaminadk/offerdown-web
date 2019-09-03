import { useEffect } from 'react'
import axios from 'axios'

export function useLocation() {
  useEffect(() => {
    if (window.localStorage.getItem('od_location')) {
      return
    }
    const url = `https://ipinfo.io/geo?token=${process.env.REACT_APP_IP_INFO_TOKEN}`
    axios.get(url).then(res => {
      if (res.status === 200) {
        const [latitude, longitude] = res.data.loc.split(',').map(Number)
        const data = { source: 'ip', latitude, longitude }
        window.localStorage.setItem('od_location', JSON.stringify(data))
      }
    })
  }, [])
}
