import React from 'react'

export default ({ data }) => (
  <tbody>
    {data.map(el => (
      <tr key={el.country}>
        <td>{el.country}</td>
        <td className='has-text-centered'>{el.confirmed}</td>
        <td className='has-text-centered'>{el.recovered}</td>
        <td className='has-text-centered'>{el.deaths}</td>
        <td className='has-text-centered'>{el.mortality.toFixed(1)}%</td>
      </tr>
    ))}
  </tbody>
)
