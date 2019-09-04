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

export const formatCondition = condition => {
  switch (condition) {
    case 'new':
      return 'New (never used)'
    case 'reconditioned':
      return 'Reconditioned (certified)'
    case 'great':
      return 'Used (never opened)'
    case 'good':
      return 'Used (normal wear)'
    default:
      return 'Useed (noraml wear)'
  }
}
