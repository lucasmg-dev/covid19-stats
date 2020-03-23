import React, { useState, useEffect, Fragment } from 'react'
import { getData } from '../../api/http'
import { formatData, sortBy } from '../../api/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const styles = {
  arrow: {
    color: '#ccc',
    fontSize: '.5rem',
    marginLeft: '.2rem'
  },
  arrow_active: {
    color: '#000',
    fontSize: '.5rem',
    marginLeft: '.2rem'
  }
}

const Arrows = ({ currentOrder, currentSort }) => {
  return (
    <Fragment>
      <FontAwesomeIcon icon={faArrowUp} style={currentSort && currentOrder === 'asc' ? styles.arrow_active : styles.arrow} />
      <FontAwesomeIcon icon={faArrowDown} style={currentSort && currentOrder === 'desc' ? styles.arrow_active : styles.arrow} />
    </Fragment>
  )
}

const CovidTable = () => {
  const [list, setList] = useState([])
  const [currentSort, setCurrentSort] = useState('deaths')
  const [currentOrder, setCurrentOrder] = useState('desc')

  function handleSort (key) {
    if (key === currentSort) {
      setList([...list].reverse())
      currentOrder === 'asc' ? setCurrentOrder('desc') : setCurrentOrder('asc')
      return
    }
    const sortedData = sortBy(list, key, 'desc')
    setList(sortedData)
    setCurrentSort(key)
    setCurrentOrder('desc')
  }

  useEffect(() => {
    (async () => {
      const data = await getData()
      const formattedData = formatData(data)
      const sortedData = sortBy(formattedData, currentSort, currentOrder)
      setList(sortedData)
    })()
  }, [])

  if (list.length < 1) {
    return <p className='text-center'>Cargando...</p>
  }

  return (
    <table className='table is-striped is-fullwidth'>
      <thead>
        <tr>
          <th onClick={() => handleSort('country')}>País <Arrows currentSort={currentSort === 'country'} currentOrder={currentOrder} /></th>
          <th onClick={() => handleSort('confirmed')}>Confirmados <Arrows currentSort={currentSort === 'confirmed'} currentOrder={currentOrder} /></th>
          <th onClick={() => handleSort('recovered')}>Recuperados <Arrows currentSort={currentSort === 'recovered'} currentOrder={currentOrder} /></th>
          <th onClick={() => handleSort('deaths')}>Fallecidos <Arrows currentSort={currentSort === 'deaths'} currentOrder={currentOrder} /></th>
        </tr>
      </thead>
      <tbody>
        {list && list.map(el => (
          <tr key={el.country}>
            <td>{el.country}</td>
            <td>{el.confirmed}</td>
            <td>{el.recovered}</td>
            <td>{el.deaths}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CovidTable
