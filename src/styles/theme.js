import { lighten, darken, desaturate } from 'polished'

export const theme = {
  primary: '#00ab80',
  secondary: '',
  black: '#4a4a4a',
  white: '#ffffff',
  error: '#e05666',
  placeholder: '#C0BFBF',
  detail: '#817E7E',
  hoverPrimaryLight: desaturate(0.5, lighten(0.6, '#00ab80')),
  hoverPrimaryDark: darken(0.05, '#00ab80'),
  grey: [
    '#FAFAFA',
    '#F2F2F2',
    '#E6E5E5',
    '#D9D8D8',
    '#CDCCCB',
    '#C0BFBF',
    '#B3B2B2',
    '#A7A5A5',
    '#9A9898',
    '#817E7E',
    '#747272',
    '#676565',
    '#5A5858',
    '#4D4C4C',
    '#403F3F'
  ],
  headerHeight: '68px',
  headerBackground: 'linear-gradient(90deg, #00ab80, #00a980 50%, #026d6d)',
  borderLight: '1px solid #D9D8D8',
  modalShadow: '0 2px 9px 0 rgba(74,74,74,0.20)'
}
