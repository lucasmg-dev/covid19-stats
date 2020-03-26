import React from 'react'

export default ({ data }) => (
  <tbody>
    {data.map(el => (
      <tr key={el.country}>
	<td>{el.country}</td>
	<td>{el.confirmed}</td>
	<td>{el.recovered}</td>
	<td>{el.deaths}</td>
      </tr>
  ))}
  </tbody>
)
