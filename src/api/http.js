const dataUrl = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=200&cacheHint=true'
const timeseriesUrl = 'https://pomber.github.io/covid19/timeseries.json'

export const getData = async () => {
  const response = await fetch(dataUrl)
  const data = await response.json()
  return data
}

export const getTimeseries = async () => {
  const response = await fetch(timeseriesUrl)
  const data = await response.json()
  return data
}
