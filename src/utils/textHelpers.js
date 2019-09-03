import { formatDistanceStrict, fromUnixTime } from 'date-fns'

export const formatName = name => {
  if (name.length > 35) {
    return name.slice(0, 35) + '...'
  }
  return name
}

export const formatPrice = price =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionUnits: 2
  }).format(price / 100)

export const formatCreatedAt = ts => formatDistanceStrict(fromUnixTime(ts / 1000), new Date())

export const formatEnum = str => {
  return str
    .split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

export const formatCondition = str => {
  let message
  if (str === 'new') message = 'New (never used)'
  else if (str === 'great') message = 'Used (normal wear)'
  else if (str === 'reconditioned') message = 'Reconditioned (certified)'
  else message = 'Used (junk)'

  return message
}
