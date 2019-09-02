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
