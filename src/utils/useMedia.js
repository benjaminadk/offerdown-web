import { useState, useEffect, useCallback } from 'react'

export function useMedia(
  queries = ['(max-width: 576px)', '(max-width: 768px)', '(max-width: 992px)'],
  values = ['phone', 'tablet', 'desktop'],
  defaultValue = 'fullscreen'
) {
  const mediaQueryLists = queries.map(q => window.matchMedia(q))

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }, [values, defaultValue, mediaQueryLists])

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach(mql => mql.addListener(handler))

    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
  }, [mediaQueryLists, getValue])

  return value
}
