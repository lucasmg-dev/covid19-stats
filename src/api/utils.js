export const formatData = data => {
  const formattedData = data.features.map(el => ({
    country: el.attributes.Country_Region,
    last_update: el.attributes.Last_Update,
    confirmed: el.attributes.Confirmed,
    deaths: el.attributes.Deaths,
    recovered: el.attributes.Recovered,
    active: el.attributes.Active,
    mortality: el.attributes.Deaths * 100 / el.attributes.Confirmed
  }))

  return formattedData
}

export const sortBy = (data, key, order = 'desc') => {
  const sorted = data.sort((a, b) => {
    if (a[key] > b[key]) return -1
    if (b[key] > a[key]) return 1
    return 0
  })
  if (order === 'asc') return sorted.reverse()
  return sorted
}

export const filterData = (data, value) => {
  return data.filter(e => e.country.toLowerCase().indexOf(value.toLowerCase()) !== -1)
}
