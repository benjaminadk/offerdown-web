import React from 'react'

const getPath = name => {
  switch (name) {
    case 'logo':
      return (
        <>
          <path d='M49.941 23.322c1.292 19.172-18.683 32.553-35.957 24.086C5.969 43.477.66 35.575.06 26.677-1.233 7.505 18.742-5.874 36.016 2.593a24.9754 24.9754 0 0 1 13.161 16.062L44.4 24.602l-4.909-5.421c-1.346-3.382-3.9-6.35-7.613-8.169-5.005-2.454-10.941-2.056-15.571 1.046-9.976 6.683-8.968 21.644 1.816 26.931 5.005 2.453 10.94 2.054 15.57-1.047 4.716-3.16 6.979-8.172 6.912-13.134l3.95 4.359 5.32-6.62c.027.257.049.517.066.775z' />
        </>
      )
    default:
      throw Error('Svg component requires valid name prop')
  }
}

const Svg = ({ name, ...rest }) => {
  return (
    <svg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg' {...rest}>
      {getPath(name)}
    </svg>
  )
}

export default Svg
