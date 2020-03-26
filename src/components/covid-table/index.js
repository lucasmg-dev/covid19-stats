import React, { useState, useEffect, Fragment } from 'react'
import { getData } from '../../api/http'
import { formatData, sortBy } from '../../api/utils'
import TableHero from './TableHero'
import TableTitle from './TableTitle'
import TableList from './TableList'

const CovidTable = () => {
  const [list, setList] = useState([])
  const [currentSort, setCurrentSort] = useState('confirmed')
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
    <Fragment>
      <TableHero data={list} />
      <table className='table is-striped is-fullwidth'>
	<thead>
	  <tr>
	    <TableTitle field='country' handleSort={handleSort} currentSort={currentSort} currentOrder={currentOrder} title="País" />
	    <TableTitle field='confirmed' handleSort={handleSort} currentSort={currentSort} currentOrder={currentOrder} title="Confirmados" />
	    <TableTitle field='recovered' handleSort={handleSort} currentSort={currentSort} currentOrder={currentOrder} title="Recuperados" />
	    <TableTitle field='deaths' handleSort={handleSort} currentSort={currentSort} currentOrder={currentOrder} title="Fallecidos" />
	  </tr>
	</thead>
	<TableList data={list} />
      </table>
    </Fragment>
  )
}

export default CovidTable
